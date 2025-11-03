import citacoesFamosas from '../assets/citacoesFamosas.json';
import frasesMotivacionais from '../assets/frasesMotivacionais.json';

// local types for the JSON entries
type LocalQuote = {
	autor: string;
	frase: string;
};

export interface QuoteResponse {
	frase: string;
	autor: string;
};

interface AdviceSlip {
	slip: {
		id: number;
		advice: string;
	};
}

const CITACOES: LocalQuote[] = citacoesFamosas as LocalQuote[];
const MOTIVACIONAIS: LocalQuote[] = frasesMotivacionais as LocalQuote[];

/**
 * Escolhe um item aleatório de um array (pode repetir entre chamadas)
 */
function randomItem<T>(arr: T[]): T | null {
	if (!arr || arr.length === 0) return null;
	const idx = Math.floor(Math.random() * arr.length);
	return arr[idx];
}

/**
 * Função determinística baseada em string (simples hash) para escolher um índice a partir
 * de um "seed" textual (usada para garantir a mesma frase durante o dia).
 */
function deterministicIndex(seed: string, length: number): number {
	if (length <= 0) return 0;
	let h = 2166136261 >>> 0; // FNV-1a 32-bit offset basis
	for (let i = 0; i < seed.length; i++) {
		h ^= seed.charCodeAt(i);
		h = Math.imul(h, 16777619) >>> 0;
	}
	return h % length;
}

/**
 * ApiCitacoes: retorna uma citação aleatória a partir do arquivo `citacoesFamosas.json`.
 * Formato retornado: "frase" - autor
 */
export async function ApiCitacoes(): Promise<QuoteResponse | null> {
	try {
		const item = randomItem(CITACOES);
		if (!item) return null;
		return { frase: item.frase, autor: item.autor } as QuoteResponse;
	} catch (error) {
		console.error('ApiCitacoes:', error);
		return null;
	}
}

/**
 * ApiFraseDiaria: mistura os dois JSONs e retorna uma frase determinística para o dia.
 * A mesma frase é retornada para todas as chamadas no mesmo dia (baseada na data local).
 */
export async function ApiFraseDiaria(): Promise<QuoteResponse | null> {
	try {
		const pool: LocalQuote[] = [...CITACOES, ...MOTIVACIONAIS];
		if (pool.length === 0) return null;

		// usar a data local (ano-mes-dia) como seed — garante a mesma escolha durante o dia
		const now = new Date();
		const seed = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
		const idx = deterministicIndex(seed, pool.length);
		const item = pool[idx];
		return { frase: item.frase, autor: item.autor } as QuoteResponse;
	} catch (error) {
		console.error('ApiFraseDiaria:', error);
		return null;
	}
}

/**
 * Busca um bilhete da API Advice Slip (externa)
 */
export async function ApiBilhete(): Promise<QuoteResponse | null> {
	try {
		const res = await fetch('https://api.adviceslip.com/advice');
		if (!res.ok) return null;
		const data: AdviceSlip = await res.json();
		return { frase: data.slip.advice, autor: 'Anônimo' } as QuoteResponse;
	} catch (error) {
		console.error('ApiBilhete:', error);
		return null;
	}
}

/**
 * ApiMotivacional: retorna uma frase aleatória a partir de `frasesMotivacionais.json`.
 */
export async function ApiMotivacional(): Promise<QuoteResponse | null> {
	try {
		const item = randomItem(MOTIVACIONAIS);
		if (!item) return null;
		return { frase: item.frase, autor: item.autor } as QuoteResponse;
	} catch (error) {
		console.error('ApiMotivacional:', error);
		return null;
	}
}

