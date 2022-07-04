const esbuild = require('esbuild');
const glob = require('tiny-glob');
const { execSync } = require('child_process');

(async () => {
    let entryPoints = await glob("./src/*/index.ts");
    esbuild.build({
        entryPoints: entryPoints,
        bundle: true,
        outdir: 'dist',
        format: 'esm',
        external: ['react', '@emotion/react'],
        plugins: [
            {
                name: 'TypeScriptDeclarationsPlugin',
                setup(build) {
                    build.onEnd((result) => {
                        if (result.errors.length > 0) return
                        execSync('tsc')
                    })
                }
            }
        ]
    }).catch(() => process.exit(1))
})()