
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

export interface Type<T> extends Function {
  new (...args: any[]): T;
}

export class DomainConverter {

  static dataToDomain<T>(domain: Type<T>, dto: any) {
    const __instance = Object.create(domain.prototype);
    __instance.__carrier_state = dto;
    return __instance as T;
  }

  static domainToData<T>(domain: any) {
    return domain.__carrier_state as T;
  }
}

export async function setObject(_keyName:string,_obj:any) {
  await Storage.set({
    key: _keyName,
    value: JSON.stringify(_obj)
  });
}

export async function getObject(_keyName:string) {
  const _ret:any = await Storage.get({ key: _keyName });
  return _ret.value && JSON.parse(_ret.value);
}

export async function setItem(_key:any, _value:any) {
  await Storage.set({
    key: _key,
    value: _value
  });
}

export async function getItem(_keyName:string) {
  const _value = await Storage.get({ key: _keyName });
  return _value;
}

export async function removeItem(_keyName:string) {
  await Storage.remove({ key: _keyName });
}

export async function keys() {
  const _keys = await Storage.keys();
  return _keys;
}

export async function clear() {
  await Storage.clear();
}