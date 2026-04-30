import { colors, gradients } from "../theme/colors"

import type { Challenge } from "../interfaces/challenge"

export const CHALLENGES: Challenge[] = [
  {
    id: "linguagens",
    title: "Linguagens de Programação",
    gradient: gradients.purpleDark as [string, string],
    arrowColor: colors.accent.purple,
    cards: [
      {
        name: "JavaScript",
        image: require("@/assets/images/javascript-logo.svg"),
      },
      {
        name: "TypeScript",
        image: require("@/assets/images/typescript-logo.svg"),
      },
      {
        name: "Python",
        image: require("@/assets/images/python-logo.svg"),
      },
      {
        name: "Java",
        image: require("@/assets/images/java-logo.svg"),
      },
      {
        name: "C#",
        image: require("@/assets/images/csharp-logo.svg"),
      },
      {
        name: "Ruby",
        image: require("@/assets/images/ruby-logo.svg"),
      },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks e Bibliotecas",
    gradient: gradients.blueDark as [string, string],
    arrowColor: colors.accent.blue,
    cards: [
      {
        name: "React",
        image: require("@/assets/images/react-logo.svg"),
      },
      {
        name: "Angular",
        image: require("@/assets/images/angular-logo.svg"),
      },
      {
        name: "Vue",
        image: require("@/assets/images/vue-logo.svg"),
      },
      {
        name: "Svelte",
        image: require("@/assets/images/svelte-logo.svg"),
      },
      {
        name: "Next.js",
        image: require("@/assets/images/nextjs-logo.svg"),
      },
      {
        name: "React Native",
        image: require("@/assets/images/react-native-logo.svg"),
      },
    ],
  },
  {
    id: "ferramentas",
    title: "Ferramentas de Desenvolvimento",
    gradient: gradients.cyanDark as [string, string],
    arrowColor: colors.accent.cyan,
    cards: [
      {
        name: "Git",
        image: require("@/assets/images/git-logo.svg"),
      },
      {
        name: "GitHub",
        image: require("@/assets/images/github-logo.svg"),
      },
      {
        name: "Docker",
        image: require("@/assets/images/docker-logo.svg"),
      },
      {
        name: "Kubernetes",
        image: require("@/assets/images/kubernetes-logo.svg"),
      },
      {
        name: "VS Code",
        image: require("@/assets/images/vscode-logo.svg"),
      },
      {
        name: "Jenkins",
        image: require("@/assets/images/jenkins-logo.svg"),
      },
    ],
  },
]
