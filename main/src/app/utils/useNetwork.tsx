import { Plugins, NetworkStatus } from '@capacitor/core';
import React, { useState } from 'react';
const { Network } = Plugins;

export const useNetwork = () => {
    const [networkStatus, setNetworkStatus] = useState<any>({})
    const [handler, setHandler] = useState<any>(0)
    console.log("handler", handler);
    if (!handler || handler === 0) {
        setHandler(1)
        Network.addListener('networkStatusChange', (_netStatus: NetworkStatus) => {
            setNetworkStatus(_netStatus);
        })
    }

    const getNetworkStatus = async () => {
        let netStatus = await Network.getStatus();
        setNetworkStatus(netStatus);
    }

    return {
        networkStatus,
        getNetworkStatus
    }
}
