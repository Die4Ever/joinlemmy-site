import { Component } from "inferno";

export class NoMatch extends Component<any, any> {
  constructor(props: any, context: any) {
    super(props, context);
  }

  render() {
    return (
      <div className="container mx-auto px-4">
        <div className="pt-16 text-center text-4xl font-bold mb-8">404</div>
      </div>
    );
  }
}
