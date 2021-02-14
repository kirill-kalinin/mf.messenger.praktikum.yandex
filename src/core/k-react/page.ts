import DOMService from '../../core/k-react/dom-service.js';
import type { PageBlocks } from '../types.js';

export default class Page {
  public blocks: PageBlocks;
  private _DOMService: DOMService;

  constructor(blocks: PageBlocks) {
    this._DOMService = new DOMService();
    this.blocks = blocks;
  }

  init() {
    for (let block of Object.values(this.blocks)) {
      this._DOMService.attachComponent.apply(null, block);
    }
  }
}
