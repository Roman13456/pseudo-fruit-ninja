const Chips = () => {
    const node = `
    <span class="mdc-evolution-chip-set" role="grid">
  <span class="mdc-evolution-chip-set__chips" role="presentation">
    <span class="mdc-evolution-chip" role="row" id="c0">
      <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell">
        <button class="mdc-evolution-chip__action mdc-evolution-chip__action--primary" type="button" tabindex="0">
          <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"></span>
          <span class="mdc-evolution-chip__text-label">Chip one</span>
        </button>
      </span>
    </span>
    <span class="mdc-evolution-chip" role="row" id="c1">
      <span class="mdc-evolution-chip__cell mdc-evolution-chip__cell--primary" role="gridcell">
        <button class="mdc-evolution-chip__action mdc-evolution-chip__action--primary" type="button" tabindex="-1">
          <span class="mdc-evolution-chip__ripple mdc-evolution-chip__ripple--primary"></span>
          <span class="mdc-evolution-chip__text-label">Chip two</span>
        </button>
      </span>
    </span>
  </span>
</span>
    `
    document.getElementById('root').innerHTML += node
}

export default Chips
