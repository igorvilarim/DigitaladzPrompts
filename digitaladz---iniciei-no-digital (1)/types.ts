export enum Difficulty {
  BEGINNER = "Iniciante",
  INTERMEDIATE = "Intermediário",
  ADVANCED = "Avançado"
}

export enum Category {
  IMAGE_EDITING = "Edição de Imagem",
  IMAGE_GENERATION = "Geração de Imagem",
  CHARACTER_CONSISTENCY = "Consistência de Personagem",
  ARTISTIC_EFFECTS = "Efeitos Artísticos",
  PRODUCT_DESIGN = "Design de Produto",
  PHOTOGRAPHY = "Fotografia",
  DIGITAL_ART = "Arte Digital"
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt_text: string;
  category: Category;
  difficulty: Difficulty;
  image_url: string;
  created_date: string;
  topics?: string[];
}
