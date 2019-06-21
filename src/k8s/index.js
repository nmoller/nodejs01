import { KubeConfig, CoreV1Api } from '@kubernetes/client-node';

const kc = new KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(CoreV1Api);

k8sApi.listNamespacedPod('siad-moodle-dev-01')
.then((res)=>{
    res.body.items.forEach(element => {
        console.log(element.metadata.name);
    });
})
.catch((error)=>{
    console.error(error);
});

