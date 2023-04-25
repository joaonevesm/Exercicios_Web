const ProcessManager = (() => {

    let instance;

    function Singleton(){
        if(instance){
            return instance;
        }

        instance = this;

        this.process = [];

        this.createProcess = (process) => {
            this.process = [...this.process, process]
        }

        this.removeProcess = ({name: processName}) => {
            this.process = this.process.filter(({name}) => name !== processName)
        };
        this.getProcess = () => this.process;
    }

    return {
        getInstance: () => new Singleton(),
    };

})();

const pManger = ProcessManager.getInstance();
const pManger2 = ProcessManager.getInstance();

pManger.createProcess({type: "p1", name: "teste"})
pManger2.createProcess({type: "p2", name: "um outro teste"})

console.log(pManger2.getProcess());