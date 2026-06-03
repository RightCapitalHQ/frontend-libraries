// @vitest-environment happy-dom

import { beforeEach, describe, expect, it } from 'vitest';

import { storageFactory } from '../src/index.js';

const createStorageTests = (storage: Storage) => {
  beforeEach(() => {
    storage.clear();
  });

  describe('setItem and getItem', () => {
    it('sets values and returns', () => {
      expect(storage.setItem('foo', 'Foo')).toBeUndefined();
      expect(storage.getItem('foo')).toEqual('Foo');

      expect(storage.setItem('empty', '')).toBeUndefined();
      expect(storage.getItem('empty')).toEqual('');
    });

    it('converts values to strings', () => {
      // @ts-expect-error Expected error for testing purposes
      expect(storage.setItem('one', 1)).toBeUndefined();
      expect(storage.getItem('one')).toEqual('1');

      // @ts-expect-error Expected error for testing purposes
      expect(storage.setItem('null', null)).toBeUndefined();
      expect(storage.getItem('null')).toEqual('null');

      // @ts-expect-error Expected error for testing purposes
      expect(storage.setItem('undefined', undefined)).toBeUndefined();
      expect(storage.getItem('undefined')).toEqual('undefined');
    });
  });

  describe('property: length', () => {
    it('is initialized at 0', () => {
      expect(storage.length).toEqual(0);
    });

    it('should increment with setItem', () => {
      storage.setItem('foo', 'Foo');
      expect(storage.length).toEqual(1);
    });

    it('should reset to 0 when cleared', () => {
      storage.setItem('foo', 'Foo');
      expect(storage.length).toEqual(1);
      storage.clear();
      expect(storage.length).toEqual(0);
    });
  });

  describe('removeItem', () => {
    it('should remove the item', () => {
      storage.setItem('foo', 'Foo');
      expect(storage.getItem('foo')).toEqual('Foo');
      storage.removeItem('foo');
      expect(storage.getItem('foo')).toBeNull();
    });

    it('should decrement length', () => {
      storage.setItem('foo', 'Foo');
      expect(storage.length).toEqual(1);
      storage.removeItem('foo');
      expect(storage.length).toEqual(0);
    });
  });

  describe('key', () => {
    it('should return key at index', () => {
      storage.setItem('foo', 'Foo');
      storage.setItem('bar', 'Bar');
      expect(storage.key(0)).toBeDefined();
      expect(storage.key(1)).toBeDefined();
      expect(storage.key(2)).toBeNull();
    });

    it('should return null for out of bounds index', () => {
      expect(storage.key(0)).toBeNull();
      expect(storage.key(-1)).toBeNull();
    });
  });
};

describe('storageFactory', () => {
  describe('when storage is not supported', () => {
    createStorageTests(storageFactory(() => ({}) as Storage));
  });

  describe('when storage is supported', () => {
    createStorageTests(storageFactory(() => localStorage));
  });
});
