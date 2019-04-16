import React, { PureComponent } from 'react';
import Matter from 'matter-js';

class PhysicsEngine extends PureComponent {
  constructor(props) {
    super(props);
    this.myCanvas = React.createRef();
    this.createEngine = this.createEngine.bind(this);
  }

  componentDidMount() {
    this.createEngine();
    console.log(this.myCanvas);
  }

  createEngine() {
    // module aliases
    const {
      Engine,
      Bodies,
      Render,
      Runner,
      Constraint,
      Body,
      Composites,
      MouseConstraint,
      Mouse,
      World,
    } = Matter;

    // create an engine
    const engine = Engine.create();
    const { world } = engine;

    // responsively design canvas
    const width = typeof window !== 'undefined' ? window.innerWidth * 0.6 : 300;
    const height = typeof window !== 'undefined' ? window.innerHeight * 0.6 : 300;

    // create a renderer
    const render = Render.create({
      element: this.myCanvas.current,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
      },
      engine,
    });

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // run the engine
    Engine.run(engine);

    // add bodies
    const group = Body.nextGroup(true);

    const bridge = Composites.stack(160, 290, 15, 1, 0, 0, (x, y) => Bodies.rectangle(x - 20, y, 53, 20, {
      collisionFilter: { group },
      chamfer: 5,
      density: 0.005,
      frictionAir: 0.05,
      render: {
        fillStyle: 'transparent',
      },
    }));

    Composites.chain(bridge, 0.3, 0, -0.3, 0, {
      stiffness: 1,
      length: 0,
      render: {
        visible: true,
      },
    });

    const stack = Composites.stack(250, 50, 6, 3, 0, 0, (x, y) => Bodies.rectangle(x, y, 50, 50, {
      render: {
        fillStyle: '#FFFFFF',
        lineWidth: 0,
      },
    }));

    World.add(world, [
      bridge,
      stack,
      // left pillar
      Bodies.rectangle(30, 490, 200, 200, {
        isStatic: true,
        render: {
          fillStyle: '#333333',
        },
      }),
      // right pillar
      Bodies.rectangle(770, 490, 200, 200, {
        isStatic: true,
        render: {
          fillStyle: '#333333',
        },
      }),
      Constraint.create({
        pointA: { x: 140, y: 420 },
        bodyB: bridge.bodies[0],
        pointB: { x: -25, y: 0 },
        length: 2,
        stiffness: 0.9,
        render: {
          visible: false,
        },
      }),
      Constraint.create({
        pointA: { x: 660, y: 420 },
        bodyB: bridge.bodies[bridge.bodies.length - 1],
        pointB: { x: 25, y: 0 },
        length: 2,
        stiffness: 0.9,
        render: {
          visible: false,
        },
      }),
    ]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.1,
        render: {
          visible: false,
        },
      },
    });

    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 800 },
    });
  }

  render() {
    return <div ref={this.myCanvas} />;
  }
}

export default PhysicsEngine;
