export type ThemeColor =
  | "blue"
  | "green"
  | "purple"
  | "orange"
  | "red"
  | "cyan";

export interface ColorTheme {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
  border: string;
  gradient: string;
}

export const getColorTheme = (
  color: ThemeColor
): ColorTheme => {
  const themes: Record<ThemeColor, ColorTheme> = {
    blue: {
      primary: "#00B4D8",
      secondary: "#0096C7",
      light: "#CAF0F8",
      dark: "#023E8A",
      border: "#90E0EF",
      gradient: "from-sky-400 to-cyan-500",
    },

    green: {
      primary: "#2ECC71",
      secondary: "#27AE60",
      light: "#D8F3DC",
      dark: "#1B5E20",
      border: "#95D5B2",
      gradient: "from-green-400 to-emerald-500",
    },

    purple: {
      primary: "#9B5DE5",
      secondary: "#7B2CBF",
      light: "#E0AAFF",
      dark: "#3C096C",
      border: "#C77DFF",
      gradient: "from-violet-400 to-purple-500",
    },

    orange: {
      primary: "#FB8500",
      secondary: "#F77F00",
      light: "#FFD6A5",
      dark: "#BC6C25",
      border: "#FFB703",
      gradient: "from-orange-400 to-amber-500",
    },

    red: {
      primary: "#EF476F",
      secondary: "#D90429",
      light: "#FFD6E0",
      dark: "#780000",
      border: "#FF8FA3",
      gradient: "from-rose-400 to-red-500",
    },

    cyan: {
      primary: "#06B6D4",
      secondary: "#0891B2",
      light: "#CFFAFE",
      dark: "#164E63",
      border: "#67E8F9",
      gradient: "from-cyan-400 to-sky-500",
    },
  };

  return themes[color];
};