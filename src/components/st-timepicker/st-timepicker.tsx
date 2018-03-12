import { Component, Element, Prop/*, Watch, Event, EventEmitter */} from '@stencil/core';

@Component({
  tag: 'st-timepicker'
})
export class StTimepicker {

  @Element() el: HTMLElement;

  @Prop() selected: string;
  @Prop() step: number = 15;
  @Prop() clock24: boolean = false;
  @Prop() name: string;
  @Prop() class: string;
  @Prop() label: string = 'Pick a time';


  _getOptions () {
    const start = 0;
    const total = Math.round((60/this.step)*24);

    let hours = [];
    for (let i=start; i<total; i++) {
      hours.push(i*this.step);
    }
    return hours;
  }

  _format (h,m) {
    let indicator = '';
    if (!this.clock24 && h >= 12) {
      indicator = 'PM';
      h = h - 12;
    }
    else {
      if (!this.clock24 && h < 12) {
        indicator = 'AM';
      }
    }

    if (!this.clock24 && h == 0) {
      h = 12
    }

    if (h < 10) {
      h = `0${h}`;
    }

    if (m < 10) {
      m = `0${m}`;
    }

    if (indicator)
      m = m + ` ${indicator}`;

    return `${h}:${m}`;
  }

  _renderOption (m) {
    let base = new Date(0);
    base.setMinutes(m);
    const hours = base.getUTCHours();
    const minutes = base.getUTCMinutes();

    const formatted = this._format(hours,minutes);

    if (this.selected == formatted)
      return(<option value={formatted} selected>{formatted}</option>)
    else
      return (<option value={formatted}>{formatted}</option>);
  }

  render() {
    const minutes = this._getOptions();

    return (
      <select class={this.class} name={this.name}>
        <option disabled selected>{this.label}</option>
        {minutes.map((m) => this._renderOption(m))}
      </select>
    );
  }
}
