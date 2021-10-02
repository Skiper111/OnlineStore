import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = []
        this._brands = []
        this._device = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCont = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._device = devices
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setPage(page) {
        this._page = page
    }

    setCount(count) {
        this._totalCont = count
    }

    setLimit(limit) {
        this._limit = limit
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._device
    }

    get selectedType() {
        this.setPage(1)
        return this._selectedType
    }

    get selectedBrand() {
        this.setPage(1)
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get count() {
        return this._totalCont
    }

    get limit() {
        return this._limit
    }
}