import { Plugins, NetworkStatus } from '@capacitor/core';
import React, { useState } from 'react';
const { Device } = Plugins;

export const useDeviceInfo = () => {
    const [deviceInfo, setDeviceInfo] = useState<any>({})

    const getDeviceInfo = async () => {
        let info = await Device.getInfo();
        setDeviceInfo(info);
    }

    return {
        deviceInfo,
        getDeviceInfo
    }
}
