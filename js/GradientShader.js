function GradientShader(){
		this.uniforms = THREE.UniformsUtils.merge([
			{
				"texture"  : { type: "t", value: null },
				"texture2"  : { type: "t", value: null },
				"mouse"  : { type: "v2", value: null },
				"resolution"  : { type: "v2", value: null },
				"time"  : { type: "f", value: null },
				"bgO"  : { type: "f", value: 0.0 },
				"texO"  : { type: "f", value: 1.0 },

			}
		]);

		this.vertexShader = [

			"varying vec2 vUv;",
			"void main() {",
			"    vUv = uv;",
			"    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
			"}"
		
		].join("\n");
		
		this.fragmentShader = [
			
			"uniform sampler2D texture;",
			"uniform sampler2D texture2;",
			"uniform vec2 resolution;",
			"uniform vec2 mouse;",
			"uniform float time;",
			"uniform float bgO;",
			"uniform float texO;",
			"varying vec2 vUv;",

			"void main(){",
			"	vec2 uv = vUv;",
			"	vec4 color = texture2D(texture, uv);",
			"	if(mod(gl_FragCoord.x, 0.03) == 0.0){",
			"		if(mod(gl_FragCoord.y, 0.03) == 0.0){",
			// "			gl_FragColor = vec4(uv,0.5+0.5*sin(time*2.0),1.0);",
			"			gl_FragColor = vec4(color.rgb, texO);",
			// "			gl_FragColor = vec4(1.0,1.0,1.0,1.0);",
			// "			gl_FragColor = texture2D(texture, uv);",

			// "		}",
			// "	}",
			"		} else {",
			// "			gl_FragColor = texture2D(texture, uv);",
			// "			gl_FragColor = vec4(1.0,1.0,1.0,bgO);",

			"			gl_FragColor = vec4(uv,0.5+0.5*sin(time*2.0),bgO);",
			"		}",
			"	} else {",
			// "			gl_FragColor = texture2D(texture, uv);",
			// "			gl_FragColor = vec4(1.0,1.0,1.0,bgO);",

			// "			gl_FragColor = texture2D(texture2, uv);",
// 
			"		gl_FragColor = vec4(uv,0.5+0.5*sin(time*2.0),bgO);",
			"	}",
			"}"

		
		].join("\n");
}