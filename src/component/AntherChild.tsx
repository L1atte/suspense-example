import { mockSwrUse, sleep } from "../helper";

function AntherChild(): JSX.Element {
  const data = mockSwrUse(sleep("Anther child"));

  return <div>{data}</div>;
}

export { AntherChild };
