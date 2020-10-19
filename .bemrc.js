module.exports = {
    root: true,
    modules: {
        "bem-tools": {
            plugins: {
                create: {
                    techs: ["jsx", "scss"],
                    levels: {
                        "src/components": {
                            default: true
                        }
                    }
                }
            }
        }
    }
};
