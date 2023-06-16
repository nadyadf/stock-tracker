const CreateDropdownFilter = () => `
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
  </div>
`;

  // <div class="dropdown">
  //   <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" id="dropdown-filter" aria-haspopup="true" aria-expanded="false">
  //     Filter berdasarkan <span class="caret"></span>
  //   </button>
  //   <ul class="dropdown-menu" aria-labelledby="dropdown-filter">
  //     <li class="dropdown-actions">
  //       <button type="button" class="btn btn-success btn-xs">Terapkan</button>
  //       <button type="button" class="btn btn-default btn-xs">Reset</button>
  //     </li>
  //     <li role="separator" class="divider"></li>

  //     <li>
  //       <label>
  //         <input type="checkbox">Harga terendah
  //       </label>
  //     </li>
  //     <li>
  //       <label>
  //         <input type="checkbox">Stock terbanyak
  //       </label>
  //     </li>
  //     <li>
  //       <label>
  //         <input type="checkbox">Expired terlama
  //       </label>
  //     </li>
  //     <li>
  //       <label>
  //         <input type="checkbox">Jarak paling dekat
  //       </label>
  //     </li>
  //   </ul>
  // </div>

export default CreateDropdownFilter;
