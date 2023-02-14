const ball = MeshBuilder.CreateSphere("ball", { diameter: 1}, this.scene);
    ball.position = new Vector3(0, 1, 0);

    const box = MeshBuilder.CreateBox("box", { size: 1 }, this.scene);
    box.position = new Vector3(0, 2, 0);

    const cylinder = MeshBuilder.CreateCylinder("cylinder", { height : 2}, this.scene);
    cylinder.position = new Vector3(2, 1, 1);

    const capsule = MeshBuilder.CreateCapsule("capsule", { height : 2}, this.scene);
    capsule.position = new Vector3(1, 0, 1);

    const torus= MeshBuilder.CreateTorus("torus", { diameter: 0.5}, this.scene);
    torus.position = new Vector3(0, 2, 0);

    const corn = MeshBuilder.CreateCylinder('corn', { height: 3, diameterTop: 0.1, diameterBottom: 0.5, tessellation: 16,
    });
    corn.position = new Vector3(0, 3, 0);
    