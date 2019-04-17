import React, { PureComponent } from 'react';
import Matter from 'matter-js';

import avatar from '../assets/images/headshot.png';

class PhysicsEngine extends PureComponent {
  constructor(props) {
    super(props);
    this.myCanvas = React.createRef();
    this.container = React.createRef();

    this.state = {
      width: 0,
      height: 0,
    };

    this.createSimulation = this.createSimulation.bind(this);
  }

  componentDidMount() {
    const newWidth = this.container.current.clientWidth;
    const newHeight = this.container.current.clientHeight;
    setTimeout(() => {
      this.createSimulation(newWidth, newHeight);
    }, 750);
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }

  componentWillUpdate() {
    const { render, width, height } = this.state;
    if (render) {
      this.myCanvas.current.width = width;
      this.myCanvas.current.height = height;
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  updateDimensions() {
    const newWidth = this.container.current.clientWidth;
    const newHeight = this.container.current.clientHeight;
    this.setState({ width: newWidth, height: newHeight });
  }

  createSimulation(containerWidth, containerHeight) {
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
    const width = typeof window !== 'undefined' ? containerWidth : 300;
    const height = typeof window !== 'undefined' ? containerHeight : 300;

    // create a renderer
    const render = Render.create({
      element: this.myCanvas.current,
      options: {
        width,
        height: height * 2,
        wireframes: false,
        background: 'transparent',
      },
      engine,
    });

    this.setState({ render });

    // run the renderer
    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // run the engine
    Engine.run(engine);

    // add bodies
    const group = Body.nextGroup(true);

    const bridge = Composites.stack(160, 1390, 15, 1, 0, 0, (x, y) => Bodies.rectangle(x - 20, y, 53, 20, {
      collisionFilter: { group },
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

    const stack = Composites.pyramid(100, 750, 5, 5, 0, 0, (x, y) => Bodies.circle(x, y, 60, {
      render: {
        fillStyle: '#FFFFFF',
        lineWidth: 0,
        sprite: {
          texture: avatar,
          xScale: 0.15,
          yScale: 0.15,
        },
      },
    }));

    World.add(world, [
      bridge,
      stack,
      // left pillar
      Bodies.rectangle(30, 490 + 1000, 200, 200, {
        isStatic: true,
        render: {
          fillStyle: '#FFFFFF',
          // sprite: {
          //   texture: avatar,
          //   xScale: 0.5,
          //   yScale: 0.5,
          // },
        },
      }),
      // right pillar
      Bodies.rectangle(770, 490 + 1000, 200, 200, {
        isStatic: true,
        render: {
          fillStyle: '#FFFFFF',
        },
      }),
      Constraint.create({
        pointA: { x: 140, y: 1420 },
        bodyB: bridge.bodies[0],
        pointB: { x: -25, y: 0 },
        length: 2,
        stiffness: 0.9,
        render: {
          visible: false,
        },
      }),
      Constraint.create({
        pointA: { x: 660, y: 1420 },
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

    mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
    mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

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
      min: { x: 0, y: 100 },
      max: { x: 800, y: 1900 },
    });

    Render.setPixelRatio(render, 'auto');
  }

  render() {
    return (
      <div id="simulation-container" ref={this.container}>
        <div id="simulation" ref={this.myCanvas} />
      </div>
    );
  }
}

export default PhysicsEngine;
