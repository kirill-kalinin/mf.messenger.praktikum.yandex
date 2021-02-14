import Template from '../../../components/intro/intro.hbs.js';
import Block from '../../core/k-react/block.js';
import type { BlockProps } from '../../core/types.js';

export default class Intro extends Block {
  constructor(props: BlockProps = {}, className = 'fragment') {
    super('div', className, props);
  }

  render() {
    return Template;
  }
}
