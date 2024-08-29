const config = {
    baseURL: 'http://192.168.1.43:7007/',
    endpoints: {
        getFirstNode: 'api/Node/GetFirstNode',
        getNodeData: 'api/Node/GetNodeData',
    },
    getFullEndpoint: function (endpointName) {
        return this.baseURL + this.endpoints[endpointName];
    }
};

export default config;
