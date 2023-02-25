import "styled-components";
import { defaultTheme } from "../styles/themes/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}

export interface ITask {
  [newTask: { id: string; task: string; isCompleted: boolean }];
}
