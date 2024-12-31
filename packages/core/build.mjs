import * as esbuild from 'esbuild';
import * as tsup from 'tsup';

async function build() {
  const file = './src/index.ts';
  const dist = './dist';
  const esbuildConfig = {
    entryPoints: [file],
    bundle: true,
    sourcemap: true,
    format: 'cjs',
    target: 'es2022',
    outdir: dist,
  }

  await esbuild.build(esbuildConfig);

  await esbuild.build({
    ...esbuildConfig,
    format: 'esm',
    outExtension: { '.js': '.mjs' },
  });

  await tsup.build({
    entry: [file],
    format: ['cjs', 'esm'],
    dts: { only: true },
    outDir: dist,
    silent: false,
  });
};

build()
