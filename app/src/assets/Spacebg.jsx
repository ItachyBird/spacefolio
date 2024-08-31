import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

const Spacebg = (props) => {
  const { nodes, materials } = useGLTF('/space_boi.glb');
  const groupRef = useRef();
  const { camera } = useThree();
  const rotationSpeed = 0.1;

  useEffect(() => {
    camera.position.set(0, 10, 20);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * rotationSpeed;
    }
  });

  return (
    <group {...props} dispose={null} ref={groupRef}>
      <group scale={0.017}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            userData={{ id: 'body1' }}
            castShadow
            receiveShadow
            geometry={nodes.body_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            userData={{ id: 'body2' }}
            castShadow
            receiveShadow
            geometry={nodes.body_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group position={[-357.404, 392.646, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
          <mesh
            userData={{ id: 'sphere1' }}
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            userData={{ id: 'sphere2' }}
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <group position={[199.634, 566.883, -221.001]} rotation={[-Math.PI / 2, 0, 0]} scale={39.706}>
          <mesh
            userData={{ id: 'sphere3' }}
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material001_0.geometry}
            material={materials['Material.001']}
          />
          <mesh
            userData={{ id: 'sphere4' }}
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_Material002_0.geometry}
            material={materials['Material.002']}
          />
        </group>
        <mesh
          userData={{ id: 'waves1' }}
          castShadow
          receiveShadow
          geometry={nodes.waves_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          userData={{ id: 'waves2' }}
          castShadow
          receiveShadow
          geometry={nodes.waves1_Material002_0.geometry}
          material={materials['Material.002']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          userData={{ id: 'waves3' }}
          castShadow
          receiveShadow
          geometry={nodes.waves2_Material002_0.geometry}
          material={materials['Material.002']}
          position={[92.464, 15.529, 2.112]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[100, 100, 1.891]}
        />
        <mesh
          userData={{ id: 'particles' }}
          castShadow
          receiveShadow
          geometry={nodes.particles_Material002_0.geometry}
          material={materials['Material.002']}
          position={[489.69, 793.811, 355.293]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={20.408}
        />
        <mesh
          userData={{ id: 'sphere5' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material001_0.geometry}
          material={materials['Material.001']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          userData={{ id: 'sphere6' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          userData={{ id: 'sphere7' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_Material002_0.geometry}
          material={materials['Material.002']}
          position={[375.469, 427.948, 0]}
          rotation={[-0.688, 0, 0]}
          scale={[104.129, 81.609, 0]}
        />
        <mesh
          userData={{ id: 'sphere8' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={62.402}
        />
        <mesh
          userData={{ id: 'sphere9' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-341.988, 460.196, -117.028]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={60.324}
        />
        <mesh
          userData={{ id: 'sphere10' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere009_Material002_0.geometry}
          material={materials['Material.002']}
          position={[507.522, 667.594, -214.475]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          userData={{ id: 'sphere11' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere010_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-287.442, 585.792, -311.857]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={16.881}
        />
        <mesh
          userData={{ id: 'sphere12' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere011_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-553.462, 331.074, -379.067]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={11.437}
        />
        <mesh
          userData={{ id: 'cube' }}
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material001_0.geometry}
          material={materials['Material.001']}
          position={[0, -101.673, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1120.013, 1120.013, 100]}
        />
        <mesh
          userData={{ id: 'sphere13' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-357.404, 392.646, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
        <mesh
          userData={{ id: 'sphere14' }}
          castShadow
          receiveShadow
          geometry={nodes.Sphere008_Material002_0.geometry}
          material={materials['Material.002']}
          position={[199.634, 566.883, -221.001]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={41.075}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/space_boi.glb');
export default Spacebg;
