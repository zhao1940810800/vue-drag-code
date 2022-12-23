const modules = import.meta.globEager('./*/index.(tsx|vue)');
let components=[]
for (const key in modules) {
    components.push(modules[key].default)
}

export default components;
