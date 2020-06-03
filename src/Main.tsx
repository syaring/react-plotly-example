import * as React from "react";
import { App } from "./App";
import { PlotyExample } from "./components/PlotyExample";

export interface IMainProps
{
  app: App;
}

export class Main extends React.Component<IMainProps, {}>
{
  constructor(props: IMainProps)
  {
    super(props);
  }

  public render(): JSX.Element
  {
    return (
      <>
        <PlotyExample />
      </>
    );
  }
}
