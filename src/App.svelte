<script>
  let copy = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z"/>
</svg>`;

  const pw = { chars24: '', chars36: '', chars48: '' };

  const charMap = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','[',']','?' ];

  const randomize = () => {
    // cache the length of the array containing all the characters to be used to avoid having to lookup the array length each time the randomize() function loops through it
	  let totalChars = charMap.length;
    // get random array index value between zero and the array length
    let index = Math.floor(Math.random() * totalChars);
    return charMap[index];
  };

  function password(desiredLength) {
    // temporary array for holding characters
    let array = [];
    for (let p = 0; p < desiredLength; p++) {
      // call the randomize function and push the value to the array
      array.push(randomize());
    }; 
    // remove the commas from the temporary array (also implicitly returns as a string)
    return array.join('');
  };

  function populate() {
    // assign the value of each password (based on length) to whatever string password() returns
    pw.chars24 = password(24);
    pw.chars36 = password(36);
    pw.chars48 = password(48);
  };

  function copied() {
    let toast = document.getElementById('toast');
    const showToast = () => toast.classList.add('show');
    const hideToast = () => toast.classList.remove('show');
    function toggleToast(time) {
      showToast();
      setTimeout(hideToast, time);
    }
    return toggleToast(1500);
  }; // adds a class to the toast element to be shown, then waits briefly before hiding it

  // generates passwords when the page loads
  populate();
</script>

<div class="container">
  <div class="row p-5">
    <div class="col">

      <label for="basic-url" class="form-label fw-bold">24 Characters</label>
      <div class="input-group mb-5">
        <input class="form-control form-control-lg user-select-none mono" type="text" bind:value={pw.chars24} disabled readonly><!-- Svelte binds this value so when the password is regenerated, the displayed value is also updated -->
        <button class="btn btn-danger text-uppercase fw-bold" type="button" on:click={ navigator.clipboard.writeText(pw.chars24.replaceAll('&amp;', '&')).then(copied) }>{@html copy}</button>
      </div>

      <label for="basic-url" class="form-label fw-bold">36 Characters</label>
      <div class="input-group mb-5">
        <input class="form-control form-control-lg user-select-none mono" type="text" bind:value={pw.chars36} disabled readonly>
        <button class="btn btn-danger text-uppercase fw-bold" type="button" on:click={ navigator.clipboard.writeText(pw.chars36.replaceAll('&amp;', '&')).then(copied) }>{@html copy}</button>
      </div>

      <label for="basic-url" class="form-label fw-bold">48 Characters</label>
      <div class="input-group mb-5">
        <input class="form-control form-control-lg user-select-none mono" type="text" bind:value={pw.chars48} disabled readonly>
        <button class="btn btn-danger text-uppercase fw-bold" type="button" on:click={ navigator.clipboard.writeText(pw.chars48.replaceAll('&amp;', '&')).then(copied) }>{@html copy}</button>
      </div>

      <div class="d-grid gap-2">
        <button class="btn btn-danger fs-5 fw-bold" type="button" on:click={ () => { 
          populate(); }}>Generate Passwords</button>
        <p class="mt-3 text-center fs-6">Copyright &copy; <a href="https://paramdeo.com" target="_blank" title="Personal website of Paramdeo Singh">Paramdeo Singh</a> <strong>·</strong> Made with ☕️ in Guyana <strong>·</strong> <a href="https://github.com/paramdeo/quickpassword.net" target="_blank" rel="noopener" title="Source on GitHub">GitHub</a></p>
      </div>
    
    </div>
  </div>
</div>

<div class="position-absolute toast bottom-0 left-0 bg-danger mb-3 ms-2" role="alert" id="toast">
  <div class="d-flex">
    <div class="toast-body"><span class="text-white">Password Copied to Clipboard!</span></div>
  </div>
</div>
