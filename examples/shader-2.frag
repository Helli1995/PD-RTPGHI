//uniform float strength;
/**
 * Edge Detection: 834144373's https://www.shadertoy.com/view/MdGGRt
 https://www.shadertoy.com/view/MlG3WG
 */

uniform sampler2D MyTex;
uniform float dimen_1;
uniform float dimen_2;
uniform float th;
uniform float size_e;

float sigmoid(float a, float f) {
	return 1.0 / (1.0 + exp(-f * a));
}

vec2 texSize = vec2(dimen_1, dimen_2);
vec2 uv = gl_FragCoord.xy/texSize;
float edgeStrength = length(fwidth(texture2D(MyTex, uv)));

void main()
{
	edgeStrength = sigmoid(edgeStrength - th, size_e);
	gl_FragColor = clamp(vec4(vec3(edgeStrength), 1.0), 0.0, 1.0);
}
