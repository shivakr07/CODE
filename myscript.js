document.getElementById('id_button_exec').onclick = () => {
  let val  = document.getElementById('id_url').value;
  // if (val == "binary"){
  //   // url = "https://github.com/shivakr07/pickAcolor-color-picker"

val = val.toLowerCase();

// -------------------------------------------------------------------
//for particular question   //searching and sorting
if (val.includes("merge") && val.includes("sort")){
       fetch('searching_sorting/mergesort.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
}
// ----------------------------------------------------------------------
if (val.includes("selection") && val.includes("sort")){
       fetch('searching_sorting/selectionsort.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
}
// ----------------------------------------------------------------------------
if (val.includes("insertion") && val.includes("sort")){
       fetch('searching_sorting/insertionsort.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
}
// ---------------------------------------------------------------------------
if (val.includes("bubble") && val.includes("sort")){
       fetch('searching_sorting/bubblesort.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
}
//----------------------------------------------------------------------
if (val.includes("quick") && val.includes("sort")){
  fetch('searching_sorting/quicksort.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}

// -------------------------------------------------------------------------
if (val.includes("heap") && val.includes("sort")){
  fetch('searching_sorting/heapSort.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// --------------------------------------------------------------------------
if (val.includes("binary") && val.includes("search")){
  fetch('searching_sorting/recursive_binarySearch.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//-------------------------------------------------------------------------
if (val.includes("binary") && val.includes("search") && val.includes("iterative")){
  fetch('searching_sorting/iterative_binarySearch.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// --------------------stacks and queues--------------
if (val.includes("infix")){
  fetch('stacks/infix_to_postfix.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//------------------------------------
if (val.includes("stack")){
  fetch('stacks/implementation.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//---------  graphs and graphs-------------------
if (val.includes("bfs") && val.includes("graph")){
  fetch('graph/BFS.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// -----------------------------------------
if (val.includes("dfs") && val.includes("graph")){
  fetch('graph/DFS.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//--------------------------------------------------------
if (val.includes("coloring") && val.includes("graph")){
  fetch('graph/m_coloring_problem.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//
if (val.includes("spanning") && val.includes("graph") && val.includes("tree")){
  fetch('graph/minimum_spanning_tree.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// ------------------------------------------------------------------------
if (val.includes("Queens") && val.includes("graph")){
  fetch('graph/N_Queens.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// ------------------------------------------------------
if (val.includes("adjacency") && val.includes("list") && val.includes("graph")){
  fetch('graph/adjacencylist.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// ------------------------------------------------------------
if (val.includes("adjacency") && val.includes("matrix") && val.includes("graph")){
  fetch('graph/adjacencymatrix.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// -----------------------------------------------------------
if (val.includes("rat") && val.includes("graph") && val.includes("maze")){
  fetch('graph/rat_in_maze.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// --------------------------------------------------------------------
if (val.includes("shortest") && val.includes("graph") && val.includes("path")){
  fetch('graph/shortestpath.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// ---------------------TREES  🌲🌲🌲🌲🌲🌲🌲🌳🌳🌳🌳🌳---------------------

if (val.includes("dfs") && val.includes("tree")){
  fetch('trees/dfs.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}

// -----------------------------------------------------
if (val.includes("bfs") && val.includes("tree")){
  fetch('trees/bfs_levelorder.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// -------------------------------------------------------
if (val.includes("height") && val.includes("tree")){
  fetch('trees/height_tree.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// -----------------------------------------------------------
if (val.includes("predecessor") && val.includes("tree")){
  fetch('trees/predecessor.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// ----------------------------------------------------------------
if (val.includes("successor") && val.includes("tree")){
  fetch('trees/successor.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// --------------------------------------------------------------

if (val.includes("traversal") && val.includes("tree")){
  fetch('trees/traversal.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// -------------------linked list 🔗🔗🔗🔗🔗📃📃📃📃📃----------

if (val.includes("arr") && val.includes("link") && val.includes("list")){
  fetch('linkedlist/arr_to_linkedlist.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// ------------------------------------------------------------------------
if (val.includes("insertion")  && val.includes("link") && val.includes("list")){
  fetch('linkedlist/operations.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
if (val.includes("deletiontion")  && val.includes("link") && val.includes("list")){
  fetch('linkedlist/operations.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// --------------------------------------------------------
if (val.includes("reverse")  && val.includes("link") && val.includes("list")){
  fetch('linkedlist/reverse_linkedlist.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// ----------------------------------------------------------
if (val.includes("sort")  && val.includes("link") && val.includes("list")){
  fetch('linkedlist/sort_linkedlist.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// -----------------------------------------------------------------
if (val.includes("gcd")&& val.includes("maths")){
  fetch('maths/gcd.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
if (val.includes("perfectnumber")&& val.includes("maths")){
  fetch('maths/perfectnumber.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
if (val.includes("sieve") ||  val.includes("prime")){
  fetch('maths/sieve.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//-------------------------------------------
if (val.includes("dictionary") &&  val.includes("merge")){
  fetch('dictionary/merge_two_dictionaries.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
if (val.includes("dictionary") &&  val.includes("sort") && val.includes("key")){
  fetch('dictionary/sort_dictionary_by_key.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
if (val.includes("dictionary") &&  val.includes("sort") && val.includes("value")){
  fetch('dictionary/sort_dictionary_by_value.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//------------------------------------------------------------
if (val.includes("array") &&  val.includes("kadane")){
  fetch('array/kadane.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//------------------------------
if (val.includes("queue") ){
  fetch('queues/implementation.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
// -------------------------------------------
if (val.includes("longest") &&  val.includes("string") && val.includes("common")){
  fetch('strings/longest_common_prefix.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
if (val.includes("frequency") &&  val.includes("string") && val.includes("chracter")){
  fetch('strings/sort_chracters_by_frequency.txt')
 .then(res => res.text())
 .then(data => {
   console.log(data);

   // Displaying to the UI
   document.getElementById('id_response').value = data;
 })
}
//---------------------------------------------------------------------------
//showing available codes of different topics

if(val == "array" || val == "list" || val.includes("array")){
    fetch('arraylist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });

  }
  // ------------------------------------------------------------
   if (val.includes("tree")){
    fetch('treeslist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });
  }
// -----------------------------------------------------------------------

 if (val == "maths") {
    fetch('mathslist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });
  }
  // ------------------------------------------------------------------------
   if (val.includes("graph")) {
    fetch('graphslist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });
  }
  // ---------------------------------------------------------------------------

  if (val.includes("sort") || val.includes("search")) {
    fetch('mathslist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });
  }
  // ----------------------------------------------------------------------------
   if (val.includes("string")) {
    fetch('stringslist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });
  }
  // -------------------------------------------------------------------

  if (val == "dictionary") {
    fetch('dictionarylist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });
  }
  // -------------------------------------------------------
  if (val == "stack") {
    fetch('stackslist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });
  }
  // ----------------------------------------------------------------
  if (val.includes("link") && val.includes("list")) {
    fetch('linkedlist.txt')
      .then(res => res.text())
      .then(data => {
        console.log(data);

        // Displaying to the UI
        document.getElementById('id_response').value = data;
      })
      .catch(err=> {
        console.log(err);

        // Displaying to the UI
        document.getElementById('id_response').value = err;
      });
  }

}//main bracket












//   fetch(url, {
//     method: 'GET',
//     mode: 'cors'
//   })
//   .then(response => {
//     if (response.ok) {
//       return response.text();
//     }
//     throw new Error('Response was not ok.');
//   })
//   .then(data => {
//     document.getElementById('id_response').value = data;
//   })
//  .catch(error => {
//     document.getElementById('id_response').value = error;
//   })
// }

