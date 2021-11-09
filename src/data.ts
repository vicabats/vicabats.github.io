export interface NavOption {
  value: string
  id: SectionName
}

export enum SectionName {
  Header = 'Header',
  AboutUs = 'AboutUs',
  Structure = 'Structure',
  Certifications = 'Certifications',
  Contact = 'Contact'
}

export const navOptions: NavOption[] = [
  {
    id: SectionName.Header,
    value: 'Home',
  },
  {
    id: SectionName.AboutUs,
    value: 'Quem somos',
  },
  {
    id: SectionName.Structure,
    value: 'Estrutura',
  },
  {
    id: SectionName.Certifications,
    value: 'Certificações ambientais',
  },
  {
    id: SectionName.Contact,
    value: 'Contato',
  }
]

export interface StructureInfo {
  name: string
  value: number
}

export const structureItems: StructureInfo[] = [
  {
    name: "Caçambas estacionárias",
    value: 120,
  },
  {
    name: "Caminhões roll on",
    value: 5,
  },
  {
    name: "Caminhões com garra sucateira",
    value: 2,
  },
  {
    name: "Escavadeiras com garra sucateira",
    value: 2,
  },
  {
    name: "Caminhão polinguidaste",
    value: 1,
  },
  {
    name: "Eletroímã",
    value: 1,
  },
  {
    name: "Prensa-tesoura",
    value: 1,
  },
]
