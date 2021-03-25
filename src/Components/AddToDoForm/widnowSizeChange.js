function windowSizeChange() {
  if(window.innerWidth > 1400) {
    return 'md'
  }
  return 'sm'
}

export default windowSizeChange;
