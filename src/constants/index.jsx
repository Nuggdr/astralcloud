import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";



export const navItems = [
  { label: "Home", href: "#" },
  { label: "Sobre", href: "#" },
  { label: "Planos", href: "#" },
  { label: "Feedback", href: "#" },
];



export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Astral Cloud",
    description:
      "Astral foi criada em 26/10/2024 por: Pil Kwang e Dohana! Temos o objetivo de criar a melhor Cloud com Menor Benificio! ",
  },
  {
    icon: <Fingerprint />,
    text: "Quais Plataformas Disponivel?",
    description:
      "Temos disponabilidade para todos dispositivos, sendo eles: Windows, Android, IOS, Macbook, TV BOX!",
  },
  {
    icon: <ShieldHalf />,
    text: "Tempo Para receber?",
    description:
      "Damos o prazo de até 10 minutos para a entrega da maquina!",
  },
  {
    icon: <BatteryCharging />,
    text: "Suporte?",
    description:
      "Temos uma equipe pronta para te atender, tirar suas duvidas e te ajudar com problemas!",
  },
  {
    icon: <PlugZap />,
    text: "Qual horario de atendimento?",
    description:
      "Segunda a sexta das 10:00 até as 01:00\nSabado e Domingo das 09:30 ate as 12:00!",
  },
  {
    icon: <GlobeLock />,
    text: "Temos acesso para ligar e desligar nossas maquinas?",
    description:
      "Claro, temos um Painel criado pela propria empresa, sendo possivel ver as informações da sua maquina e ligar e desligar a hora que bem entender!",
  },
  {
    icon: <GlobeLock />,
    text: "Qual as configurações ?",
    description:
      "Processador:AMD EPYC > Memoria RAM: 28gb > Disco: 1 disco de (256gb SSD) > Placa de vídeo: Tesla T4",
  },
];

export const checklistItems = [
  {
    title: "Programar",
    description:
      "Voce pode usar nossas maquinas para programar também! indepedente da linguagem e IDLE que voce usar!",
  },
  {
    title: "Editar",
    description:
      "É Editor? voce sabia que em nossas maquinas também é possivel editar? Então não perca tempo e assine agora.",
  },
  {
    title: "Renderizar",
    description:
      "Isso mesmo, voce pode renderizar tambem!",
  },
  {
    title: "Jogar",
    description:
      "Opa, quer jogar? aqui nas nossas maquinas voce também pode jogar com alto desempenho e os graficos no ultra! a mais de 60FPS.",
  },
  
];

export const pricingOptions = [
  {
    title: "Diaria 1 Dia ",
    price: "R$12,90",
    features: [
      "Sem Limite de Sessão",
      "Sem Ant-AFK",
      "Sem Salvamento de Arquivos",
      "Com Spot",
    ],
  },
  {
    title: "Semanal 7 Dias",
    price: "R$29,90",
    features: [
      "Sem Limite de Sessão",
      "Sem Ant-AFK",
      "Com Salvamento de Arquivos",
      "Com Spot",
    ],
  },
  {
    title: "Quinzenal 15 Dias",
    price: "R$54,90",
    features: [
      "Sem Limite de Sessão",
      "Sem Ant-AFK",
      "Com Salvamento de Arquivos",
      "Com Spot",
    ],
  },
  {
    title: "Mensal 30 Dias",
    price: "R$119,90",
    features: [
      "Sem Limite de Sessão",
      "Sem Ant-AFK",
      "Com Salvamento de Arquivos",
      "Com Spot",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://parsec.app/", text: "Parsec" },
  { href: "https://github.com/moonlight-stream/moonlight-qt/releases", text: "Moonlight" },
];

export const platformLinks = [
  { href: "https://discord.gg/JFt9AaXY3f", text: "Astral Cloud" },
];

export const communityLinks = [
  { text: "CNPJ: criando..."},

];
