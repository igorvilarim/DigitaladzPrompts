import { Prompt, Category, Difficulty } from './types';

export const MOCK_PROMPTS: Prompt[] = [
  {
    id: "1",
    title: "Geração de Figura 3D Cruzada",
    description: "Converta uma foto para vista aérea e marque a posição do fotógrafo.",
    prompt_text: "Generate a 3D crossed view of a cyberpunk character, high angle shot, isometric perspective, photorealistic rendering, unreal engine 5 style.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/isometric%20view%20of%20a%20cyberpunk%20character%20in%20neon%20city,%20unreal%20engine%205%20render,%20high%20poly,%20detailed?width=1024&height=576&nologo=true&seed=1",
    created_date: "2024-01-15"
  },
  {
    id: "2",
    title: "Conjunto Funko Pop com Caixa",
    description: "Figura estilo Funko Pop completa com caixa de produto.",
    prompt_text: "Funko Pop vinyl figure of Ironman, inside packaging box, plastic window, vibrant colors, 3d render, studio lighting, white background.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/funko%20pop%20ironman%20figure%20in%20box,%20product%20photography,%203d%20render,%20vibrant?width=1024&height=576&nologo=true&seed=2",
    created_date: "2024-01-18"
  },
  {
    id: "3",
    title: "Transformação de Clima",
    description: "Mude as condições climáticas de uma foto mantendo a cena principal.",
    prompt_text: "City street in a snowy blizzard, cinematic lighting, cold color grading, highly detailed, photorealistic.",
    category: Category.IMAGE_EDITING,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/cinematic%20shot%20of%20city%20street%20in%20blizzard,%20snow%20storm,%20cold%20blue%20tones,%20photorealistic?width=1024&height=576&nologo=true&seed=3",
    created_date: "2024-01-20"
  },
  {
    id: "4",
    title: "Figura 3D Escala 1/7 Realista",
    description: "Transforme uma foto em figura 3D colecionável com base e caixa.",
    prompt_text: "1/7 scale anime figure of a warrior girl, high quality PVC, detailed sculpting, display base, vibrant paint job, studio product photography.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/1/7%20scale%20anime%20figure%20warrior%20girl,%20pvc%20statue,%20studio%20lighting,%20detailed%20sculpt?width=1024&height=576&nologo=true&seed=4",
    created_date: "2024-02-01"
  },
  {
    id: "5",
    title: "Figura em Cápsula Gashapon",
    description: "Miniatura em cápsula de gashapon com pose e cores personalizáveis.",
    prompt_text: "Gashapon capsule toy figure of a cute cat, chibi style, inside plastic transparent sphere, colorful machine background, macro photography.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/cute%20cat%20figure%20inside%20gashapon%20capsule,%20macro%20photography,%20colorful,%20japanese%20toy?width=1024&height=576&nologo=true&seed=5",
    created_date: "2024-02-05"
  },
  {
    id: "6",
    title: "Movimento Abstrato em Cenas",
    description: "Converta uma foto de ação borrada em diferentes cenários esportivos.",
    prompt_text: "Abstract motion blur running track scene, dynamic composition, speed lines, energetic atmosphere, digital art style.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/abstract%20motion%20blur%20running%20track,%20speed%20lines,%20dynamic%20sports%20photography,%20artistic?width=1024&height=576&nologo=true&seed=6",
    created_date: "2024-02-10"
  },
  {
    id: "7",
    title: "Colorir Arte Linear com Paleta",
    description: "Aplique cores de uma paleta específica a uma arte linear.",
    prompt_text: "Line art portrait of a woman colored using pastel color palette: #FFB6C1, #87CEEB, #98FB98. Soft shading, watercolor texture.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/line%20art%20woman%20portrait%20with%20pastel%20colors%20overlay,%20soft%20aesthetic,%20artistic%20illustration?width=1024&height=576&nologo=true&seed=7",
    created_date: "2024-02-12"
  },
  {
    id: "8",
    title: "Visualização de Estrutura Interna",
    description: "Crie cortes transversais mostrando estruturas internas de objetos.",
    prompt_text: "Cross-section cutaway view of a vintage car, showing engine parts, mechanical details, technical illustration style, labeled parts.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/technical%20cutaway%20illustration%20of%20vintage%20car%20engine,%20detailed%20diagram,%20cross%20section?width=1024&height=576&nologo=true&seed=8",
    created_date: "2024-02-15"
  },
  {
    id: "9",
    title: "Anime para Cosplayer Real",
    description: "Transforme ilustrações de anime em fotos de cosplayers reais.",
    prompt_text: "Real life cosplay photography of Naruto, detailed costume texture, realistic skin, cinematic lighting, bokeh background.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/hyperrealistic%20cosplay%20photo%20of%20Naruto,%20detailed%20fabric,%20cinematic%20lighting,%20bokeh?width=1024&height=576&nologo=true&seed=9",
    created_date: "2024-02-18"
  },
  {
    id: "10",
    title: "Escultura de Mármore Personalizada",
    description: "Transforme uma foto em uma escultura de mármore fotorrealista.",
    prompt_text: "Classical marble statue of Zeus, museum lighting, cracked stone texture, renaissance style, white marble.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/marble%20bust%20of%20Zeus,%20classical%20sculpture,%20dramatic%20museum%20lighting,%20white%20marble%20texture?width=1024&height=576&nologo=true&seed=10",
    created_date: "2024-02-20"
  },
  {
    id: "11",
    title: "Mashup de Figuras Históricas",
    description: "Combine características de diferentes figuras históricas em um retrato.",
    prompt_text: "Portrait mashup of Albert Einstein and Marilyn Monroe, oil painting style, detailed brushstrokes, historical fusion.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/surreal%20portrait%20blending%20Albert%20Einstein%20and%20Marilyn%20Monroe,%20oil%20painting%20style,%20artistic?width=1024&height=576&nologo=true&seed=11",
    created_date: "2024-02-22"
  },
  {
    id: "12",
    title: "Gerar Design de Personagem Completo",
    description: "Crie um character design completo com múltiplas vistas e expressões.",
    prompt_text: "Full character sheet of a fantasy knight, front view, side view, back view, 3 facial expressions, fantasy rpg style, flat shading.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/character%20design%20sheet%20fantasy%20knight,%20front%20view,%20side%20view,%20concept%20art,%20white%20background?width=1024&height=576&nologo=true&seed=12",
    created_date: "2024-02-25"
  },
  {
    id: "13",
    title: "Paisagem Cyberpunk Noturna",
    description: "Crie uma cidade futurista iluminada por neons.",
    prompt_text: "Cyberpunk city street at night, raining, neon lights reflecting on wet pavement, towering skyscrapers, flying cars, blade runner vibe.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/futuristic%20cyberpunk%20city%20at%20night,%20neon%20rain,%20flying%20cars,%20blade%20runner%20aesthetic?width=1024&height=576&nologo=true&seed=13",
    created_date: "2024-03-01"
  },
  {
    id: "14",
    title: "Retrato Pixel Art",
    description: "Converta retratos em estilo 8-bit nostálgico.",
    prompt_text: "8-bit pixel art portrait of a wizard, retro game style, limited color palette, dithering, chunky pixels.",
    category: Category.IMAGE_EDITING,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/8-bit%20pixel%20art%20wizard%20character,%20retro%20video%20game%20sprite,%20pixelated%20style?width=1024&height=576&nologo=true&seed=14",
    created_date: "2024-03-05"
  },
  {
    id: "15",
    title: "Consistência de Personagem: Fada",
    description: "Mantenha o mesmo rosto em diferentes poses.",
    prompt_text: "Character sheet of a forest fairy, distinct facial features, consistent clothing, multiple angles, same face identity.",
    category: Category.CHARACTER_CONSISTENCY,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/character%20reference%20sheet%20forest%20fairy,%20multiple%20poses,%20concept%20art,%20consistent%20character?width=1024&height=576&nologo=true&seed=15",
    created_date: "2024-03-10"
  },
  {
    id: "16",
    title: "Fotografia Macro de Olho",
    description: "Detalhes extremos da íris humana com iluminação de estúdio.",
    prompt_text: "Extreme macro photography of a human blue eye, detailed iris texture, studio ring lighting, 8k resolution, hyperrealistic.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/macro%20photography%20of%20blue%20human%20eye,%20iris%20details,%20hyperrealistic,%20studio%20lighting?width=1024&height=576&nologo=true&seed=16",
    created_date: "2024-03-12"
  },
  {
    id: "17",
    title: "Cidade Subaquática",
    description: "Conceito de cidade futurista submersa no oceano.",
    prompt_text: "Futuristic underwater city, bioluminescent lights, glass domes, coral reefs, diverse marine life, cinematic atmosphere.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/futuristic%20underwater%20city%20with%20glass%20domes,%20bioluminescent,%20marine%20life,%20cinematic?width=1024&height=576&nologo=true&seed=17",
    created_date: "2024-03-14"
  },
  {
    id: "18",
    title: "Renderização de Tênis Conceitual",
    description: "Design de produto para tênis esportivo futurista.",
    prompt_text: "Futuristic sneaker design, floating in air, dynamic lighting, sleek materials, neon accents, 3d product render, unreal engine.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/futuristic%20sneaker%20concept,%20product%20render,%20floating,%20neon%20accents,%20high%20quality?width=1024&height=576&nologo=true&seed=18",
    created_date: "2024-03-15"
  },
  {
    id: "19",
    title: "Estilo Claymation (Massinha)",
    description: "Gere personagens com aparência de stop-motion em massinha.",
    prompt_text: "Cute monster made of clay, plasticine texture, fingerprint details, stop motion animation style, soft studio lighting.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/claymation%20style%20cute%20monster,%20plasticine%20texture,%20stop%20motion,%20soft%20lighting?width=1024&height=576&nologo=true&seed=19",
    created_date: "2024-03-16"
  },
  {
    id: "20",
    title: "Logotipo Minimalista Tech",
    description: "Criação de logos vetoriais para startups de tecnologia.",
    prompt_text: "Minimalist logo for a tech startup, geometric fox head shape, gradient blue to purple, vector style, white background.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/minimalist%20vector%20logo%20geometric%20fox,%20tech%20startup,%20gradient%20blue,%20white%20background?width=1024&height=576&nologo=true&seed=20",
    created_date: "2024-03-17"
  },
  {
    id: "21",
    title: "Dupla Exposição",
    description: "Combine silhueta humana com paisagem natural.",
    prompt_text: "Double exposure photography, silhouette of a man combined with a pine forest and misty mountains, monochrome, artistic.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/double%20exposure%20portrait%20man%20and%20forest,%20misty%20mountains,%20monochrome,%20artistic?width=1024&height=576&nologo=true&seed=21",
    created_date: "2024-03-18"
  },
  {
    id: "22",
    title: "Steampunk Explorer",
    description: "Retrato de personagem em estilo Steampunk vitoriano.",
    prompt_text: "Steampunk explorer with brass goggles, leather gear, clockwork background, intricate details, oil painting style.",
    category: Category.CHARACTER_CONSISTENCY,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/steampunk%20explorer%20character,%20brass%20goggles,%20leather,%20clockwork,%20intricate%20painting?width=1024&height=576&nologo=true&seed=22",
    created_date: "2024-03-19"
  },
  {
    id: "23",
    title: "Knolling de Ferramentas",
    description: "Organização visual de objetos em 90 graus (Knolling).",
    prompt_text: "Knolling photography of vintage camera repair tools, organized neatly on a cutting mat, top-down view, balanced composition.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/knolling%20photography%20vintage%20camera%20tools,%20flat%20lay,%20organized,%20top%20down%20view?width=1024&height=576&nologo=true&seed=23",
    created_date: "2024-03-20"
  },
  {
    id: "24",
    title: "Arte em Papel (Papercut)",
    description: "Ilustração simulando camadas de papel recortado.",
    prompt_text: "Layered papercut art of a mountain landscape at sunset, depth of field, shadow details, vibrant orange and purple tones.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/papercut%20art%20style%20mountain%20landscape,%20layered%20paper,%20sunset,%20shadows,%203d%20effect?width=1024&height=576&nologo=true&seed=24",
    created_date: "2024-03-21"
  },
  {
    id: "25",
    title: "Iluminação Neon Noir",
    description: "Retrato dramático com iluminação colorida e sombras fortes.",
    prompt_text: "Detective in a rainy alley, neon noir lighting, pink and blue rim light, heavy shadows, cinematic mystery atmosphere.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/neon%20noir%20detective%20in%20rain,%20pink%20and%20blue%20lighting,%20cinematic,%20mystery?width=1024&height=576&nologo=true&seed=25",
    created_date: "2024-03-22"
  },
  {
    id: "26",
    title: "Comida Gourmet: Hambúrguer",
    description: "Fotografia publicitária de alimentos com alta apetitosidade.",
    prompt_text: "Delicious gourmet burger with melting cheese, dripping sauce, fresh lettuce, steam rising, macro food photography, dark background.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/gourmet%20burger%20commercial%20photography,%20melting%20cheese,%20steam,%20delicious,%20macro?width=1024&height=576&nologo=true&seed=26",
    created_date: "2024-03-23"
  },
  {
    id: "27",
    title: "Frasco de Perfume Luxo",
    description: "Renderização de produto cosmético com reflexos.",
    prompt_text: "Luxury perfume bottle on a mirrored surface, golden liquid, water splashes, elegant bokeh background, high-end product ad.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/luxury%20perfume%20bottle%20advertisement,%20golden,%20water%20splash,%20elegant,%20product%20render?width=1024&height=576&nologo=true&seed=27",
    created_date: "2024-03-24"
  },
  {
    id: "28",
    title: "Estilo Ukiyo-e Japonês",
    description: "Arte no estilo de xilogravura japonesa tradicional.",
    prompt_text: "Great wave off Kanagawa style, but with a modern city skyline in background, Ukiyo-e woodblock print texture, traditional colors.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/ukiyo-e%20style%20wave%20and%20city,%20japanese%20woodblock%20print,%20traditional%20art?width=1024&height=576&nologo=true&seed=28",
    created_date: "2024-03-25"
  },
  {
    id: "29",
    title: "Robô Retro dos Anos 50",
    description: "Design de robô vintage estilo ficção científica antiga.",
    prompt_text: "1950s retro tin robot toy, rusted metal texture, vintage sci-fi poster style, atomic age aesthetic.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/retro%201950s%20robot%20toy,%20tin%20metal,%20vintage%20sci-fi,%20atomic%20age?width=1024&height=576&nologo=true&seed=29",
    created_date: "2024-03-26"
  },
  {
    id: "30",
    title: "Ilustração de Livro Infantil",
    description: "Estilo suave de aquarela para histórias infantis.",
    prompt_text: "Watercolor illustration of a bear having a tea party with a rabbit in the woods, soft pastel colors, whimsical style.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/watercolor%20children%20book%20illustration,%20bear%20and%20rabbit%20tea%20party,%20whimsical,%20soft?width=1024&height=576&nologo=true&seed=30",
    created_date: "2024-03-27"
  },
  {
    id: "31",
    title: "Quarto Gamer Isometrico",
    description: "Sala de jogos em 3D isométrico com muitos detalhes.",
    prompt_text: "Isometric view of a cozy gamer room, RGB lighting, multiple monitors, posters, messy but cozy, 3D blender render.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/isometric%20gamer%20room,%20rgb%20lighting,%20cozy,%203d%20render,%20blender%20style?width=1024&height=576&nologo=true&seed=31",
    created_date: "2024-03-28"
  },
  {
    id: "32",
    title: "Tatuagem Old School",
    description: "Design de tatuagem estilo tradicional americano.",
    prompt_text: "American traditional tattoo design of a panther and a rose, bold lines, limited color palette (red, yellow, black, green), white background.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/traditional%20tattoo%20flash%20panther%20and%20rose,%20bold%20lines,%20old%20school,%20white%20background?width=1024&height=576&nologo=true&seed=32",
    created_date: "2024-03-29"
  },
  {
    id: "33",
    title: "Paisagem Alienígena Surreal",
    description: "Mundo extraterrestre com flora e céus estranhos.",
    prompt_text: "Surreal alien landscape, purple sky with two moons, giant floating rocks, bizarre red vegetation, Salvador Dali style.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/surreal%20alien%20landscape,%20two%20moons,%20floating%20rocks,%20dali%20style,%20weird?width=1024&height=576&nologo=true&seed=33",
    created_date: "2024-03-30"
  },
  {
    id: "34",
    title: "Interior Minimalista",
    description: "Design de interiores moderno e limpo.",
    prompt_text: "Modern minimalist living room, large windows, natural light, beige and white tones, scandinavian furniture, architectural photography.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/minimalist%20living%20room%20interior,%20scandinavian,%20bright%20natural%20light,%20architectural?width=1024&height=576&nologo=true&seed=34",
    created_date: "2024-04-01"
  },
  {
    id: "35",
    title: "Retrato Ciborgue",
    description: "Fusão de humano e máquina em retrato realista.",
    prompt_text: "Portrait of a female cyborg, half face revealing mechanical parts underneath skin, glowing blue wires, hyperrealistic, 8k.",
    category: Category.CHARACTER_CONSISTENCY,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/female%20cyborg%20portrait,%20exposed%20mechanics,%20glowing%20wires,%20hyperrealistic%20sci-fi?width=1024&height=576&nologo=true&seed=35",
    created_date: "2024-04-02"
  },
  {
    id: "36",
    title: "Sticker / Adesivo",
    description: "Design de adesivo com contorno branco.",
    prompt_text: "Die-cut sticker design of a happy corgi dog, thick white border, vector art, vibrant colors, flat design.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/sticker%20design%20happy%20corgi,%20white%20border,%20vector,%20flat%20design,%20cute?width=1024&height=576&nologo=true&seed=36",
    created_date: "2024-04-03"
  },
  {
    id: "37",
    title: "Capa de Álbum Synthwave",
    description: "Arte retrofuturista estilo anos 80.",
    prompt_text: "Synthwave album cover, grid landscape, sunset horizon, retro sports car, palm trees, pink and purple neon aesthetic.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/synthwave%20album%20art,%20retro%2080s,%20neon%20grid,%20sunset,%20sports%20car?width=1024&height=576&nologo=true&seed=37",
    created_date: "2024-04-04"
  },
  {
    id: "38",
    title: "Jóia de Fantasia",
    description: "Design de amuleto mágico detalhado.",
    prompt_text: "Magical amulet necklace, glowing sapphire gem, intricate silver filigree, fantasy prop design, macro product shot.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/magical%20fantasy%20amulet,%20glowing%20gem,%20intricate%20silver,%20product%20design?width=1024&height=576&nologo=true&seed=38",
    created_date: "2024-04-05"
  },
  {
    id: "39",
    title: "Glitch Art",
    description: "Efeito de distorção digital em retrato.",
    prompt_text: "Portrait of a hacker with digital glitch effects, data corruption, pixel sorting, rgb shift, cyberpunk aesthetic.",
    category: Category.IMAGE_EDITING,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/glitch%20art%20portrait,%20digital%20distortion,%20pixel%20sorting,%20cyberpunk%20hacker?width=1024&height=576&nologo=true&seed=39",
    created_date: "2024-04-06"
  },
  {
    id: "40",
    title: "Poster de Filme Vintage",
    description: "Estilo de cartaz de cinema dos anos 70.",
    prompt_text: "Vintage movie poster for a space opera, hand painted style, dramatic composition, distressed paper texture, retro typography.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/vintage%2070s%20movie%20poster%20space%20opera,%20painted%20style,%20retro%20texture?width=1024&height=576&nologo=true&seed=40",
    created_date: "2024-04-07"
  },
  {
    id: "41",
    title: "Drone View (Vista Aérea)",
    description: "Fotografia aérea de paisagens impressionantes.",
    prompt_text: "Drone shot of a winding road through autumn forest, top down view, vibrant orange and red leaves, symmetrical composition.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/drone%20view%20winding%20road%20autumn%20forest,%20top%20down,%20vibrant%20leaves?width=1024&height=576&nologo=true&seed=41",
    created_date: "2024-04-08"
  },
  {
    id: "42",
    title: "Origami 3D",
    description: "Simulação de animais feitos de papel dobrado.",
    prompt_text: "Complex origami dragon made of gold paper, studio lighting, soft shadows, realistic paper texture, macro shot.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/golden%20origami%20dragon,%20paper%20art,%20studio%20lighting,%20realistic%20texture?width=1024&height=576&nologo=true&seed=42",
    created_date: "2024-04-09"
  },
  {
    id: "43",
    title: "Vidro Manchado (Vitral)",
    description: "Arte estilo vitral de igreja gótica.",
    prompt_text: "Stained glass window design of a phoenix rising, vibrant colors, lead lines, light shining through, intricate pattern.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/stained%20glass%20window%20phoenix,%20vibrant%20colors,%20church%20glass%20art?width=1024&height=576&nologo=true&seed=43",
    created_date: "2024-04-10"
  },
  {
    id: "44",
    title: "Moda Futurista",
    description: "Conceito de roupa de alta costura sci-fi.",
    prompt_text: "Runway model wearing avant-garde futuristic fashion, holographic fabric, geometric shapes, neon accessories, vogue editorial style.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/avant-garde%20futuristic%20fashion%20model,%20holographic%20clothing,%20editorial%20photography?width=1024&height=576&nologo=true&seed=44",
    created_date: "2024-04-11"
  },
  {
    id: "45",
    title: "Mapa de Fantasia RPG",
    description: "Criação de mapas para jogos de mesa.",
    prompt_text: "Aged parchment map of a fantasy world, mountains, forests, rivers, sea monsters, ink drawing style, burned edges.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/fantasy%20rpg%20world%20map%20on%20parchment,%20ink%20drawing,%20old%20paper%20texture?width=1024&height=576&nologo=true&seed=45",
    created_date: "2024-04-12"
  },
  {
    id: "46",
    title: "Fumaça Colorida",
    description: "Fotografia abstrata usando bombas de fumaça.",
    prompt_text: "Silhouette of a dancer surrounded by exploding colored smoke powder (blue and yellow), dynamic motion, high speed photography, black background.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/dancer%20with%20exploding%20colored%20powder%20smoke,%20dynamic,%20black%20background?width=1024&height=576&nologo=true&seed=46",
    created_date: "2024-04-13"
  },
  {
    id: "47",
    title: "Arquitetura Solarpunk",
    description: "Cidades verdes e sustentáveis.",
    prompt_text: "Solarpunk city architecture, buildings covered in greenery, solar panels, glass structures, bright sunny day, optimistic future.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/solarpunk%20city%20architecture,%20green%20buildings,%20sustainable%20future,%20bright?width=1024&height=576&nologo=true&seed=47",
    created_date: "2024-04-14"
  },
  {
    id: "48",
    title: "Retrato em Grafite",
    description: "Arte de rua em muro de tijolos.",
    prompt_text: "Detailed graffiti portrait of a jazz musician on a brick wall, spray paint texture, vibrant urban art style.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/graffiti%20art%20portrait%20jazz%20musician,%20brick%20wall,%20spray%20paint,%20urban?width=1024&height=576&nologo=true&seed=48",
    created_date: "2024-04-15"
  },
  {
    id: "49",
    title: "Mockup de Camiseta",
    description: "Apresentação de estampa em vestuário.",
    prompt_text: "Black t-shirt mockup on a hanger, plain wall background, realistic fabric folds, soft lighting, for print on demand.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/black%20t-shirt%20mockup%20hanging,%20realistic%20fabric,%20product%20photography?width=1024&height=576&nologo=true&seed=49",
    created_date: "2024-04-16"
  },
  {
    id: "50",
    title: "Invasão Zumbi",
    description: "Cena de horror apocalíptico.",
    prompt_text: "Apocalyptic street scene, horde of zombies approaching, burning cars, fog, dramatic horror movie lighting.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/zombie%20apocalypse%20street%20scene,%20horror,%20fog,%20cinematic%20lighting?width=1024&height=576&nologo=true&seed=50",
    created_date: "2024-04-17"
  },
  {
    id: "51",
    title: "Explosão de Líquido",
    description: "Fotografia de alta velocidade de fluidos.",
    prompt_text: "High speed photography of a strawberry dropping into milk, crown splash, white background, sharp focus, macro.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/strawberry%20splash%20into%20milk,%20high%20speed%20photography,%20macro,%20white%20background?width=1024&height=576&nologo=true&seed=51",
    created_date: "2024-04-18"
  },
  {
    id: "52",
    title: "Arte Low Poly",
    description: "Estilo geométrico com poucos polígonos.",
    prompt_text: "Low poly illustration of a fox in a forest, geometric shapes, flat shading, vibrant colors, minimalist 3d art.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/low%20poly%20fox%20in%20forest,%20geometric%20art,%20flat%20shading,%20vibrant?width=1024&height=576&nologo=true&seed=52",
    created_date: "2024-04-19"
  },
  {
    id: "53",
    title: "Retrato Renascentista",
    description: "Estilo de pintura a óleo clássica.",
    prompt_text: "Portrait of a modern woman dressed in renaissance clothing, oil painting style like Leonardo da Vinci, cracked varnish texture.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/renaissance%20oil%20painting%20portrait,%20da%20vinci%20style,%20cracked%20texture?width=1024&height=576&nologo=true&seed=53",
    created_date: "2024-04-20"
  },
  {
    id: "54",
    title: "Interior de Espaçonave",
    description: "Ambiente Sci-Fi limpo e tecnológico.",
    prompt_text: "Interior of a sci-fi spaceship corridor, clean white panels, hexagonal doors, blue led strips, 2001 space odyssey vibe.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/sci-fi%20spaceship%20corridor,%20clean%20white,%20blue%20leds,%20futuristic%20interior?width=1024&height=576&nologo=true&seed=54",
    created_date: "2024-04-21"
  },
  {
    id: "55",
    title: "Fotografia Infravermelha",
    description: "Mundo surreal com folhagem rosa/branca.",
    prompt_text: "Infrared photography of a park, trees are pink and white, sky is dark blue, surreal color palette, aerochrome film style.",
    category: Category.PHOTOGRAPHY,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/infrared%20photography%20park,%20pink%20trees,%20surreal,%20aerochrome%20style?width=1024&height=576&nologo=true&seed=55",
    created_date: "2024-04-22"
  },
  {
    id: "56",
    title: "Padrão Sem Emenda (Seamless)",
    description: "Textura repetível para fundos.",
    prompt_text: "Seamless floral pattern background, vintage botanical illustration style, flowers and leaves, pastel colors, repeatable texture.",
    category: Category.DIGITAL_ART,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/seamless%20floral%20pattern,%20vintage%20botanical,%20pastel,%20wallpaper%20texture?width=1024&height=576&nologo=true&seed=56",
    created_date: "2024-04-23"
  },
  {
    id: "57",
    title: "Batalha Épica Fantasia",
    description: "Cena de ação com muitos elementos.",
    prompt_text: "Epic fantasy battle scene, knights vs dragons, fire breathing, magic spells, chaotic battlefield, cinematic wide shot.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/epic%20fantasy%20battle%20knights%20vs%20dragon,%20cinematic,%20magic,%20chaos?width=1024&height=576&nologo=true&seed=57",
    created_date: "2024-04-24"
  },
  {
    id: "58",
    title: "Retrato Dupla Exposição Animal",
    description: "Silhueta de animal com paisagem interna.",
    prompt_text: "Double exposure silhouette of a bear containing a starry night forest landscape, aurora borealis, artistic vector style.",
    category: Category.ARTISTIC_EFFECTS,
    difficulty: Difficulty.INTERMEDIATE,
    image_url: "https://image.pollinations.ai/prompt/double%20exposure%20bear%20silhouette%20starry%20night,%20aurora,%20artistic?width=1024&height=576&nologo=true&seed=58",
    created_date: "2024-04-25"
  },
  {
    id: "59",
    title: "Corte Esquemático de Câmera",
    description: "Diagrama técnico explodido.",
    prompt_text: "Exploded view diagram of a DSLR camera, floating parts, technical lines, blueprint style on blue background.",
    category: Category.PRODUCT_DESIGN,
    difficulty: Difficulty.ADVANCED,
    image_url: "https://image.pollinations.ai/prompt/exploded%20view%20camera%20diagram,%20blueprint%20style,%20technical%20illustration?width=1024&height=576&nologo=true&seed=59",
    created_date: "2024-04-26"
  },
  {
    id: "60",
    title: "Mundo de Doces",
    description: "Paisagem fantástica feita de guloseimas.",
    prompt_text: "Fantasy landscape made entirely of candy and sweets, chocolate river, lollipop trees, gummy bear mountains, vibrant colors.",
    category: Category.IMAGE_GENERATION,
    difficulty: Difficulty.BEGINNER,
    image_url: "https://image.pollinations.ai/prompt/candy%20land%20landscape,%20chocolate%20river,%20sweets,%20vibrant%20colors?width=1024&height=576&nologo=true&seed=60",
    created_date: "2024-04-27"
  }
];