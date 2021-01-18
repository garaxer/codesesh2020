

const towers = { 1: [1, 2, 3, 4, 5, 6], 2: [], 3: [] }; // the first position of the array is the top of the tower

const changePos = (from, to) => (towers) => ({
  ...towers,
  [from]:(([, ...t]) => t)(towers[from]),
  [to]: [...towers[to], (([h]) => h)(towers[from])],
});

//let a = changePos(1, 2)(towers);
//console.log(a);
//a = changePos(1, 3)(a);
//console.log(a);


var change = (from, to) => (towers) => {
  const [head, ...tail] = towers[from];
  return {
    ...towers,
    [from]: tail,
    [to]: [head, ...towers[to]],
  }
}

const compose = (...fns) => x => fns.reduce((a, c) => c(a), x)
let b = compose(change(1, 2), change(1, 3), change(2, 1), )(towers)
console.log(b)

const moveCheck = (from: string, to: string, towers: Towers) =>
towers[to].length ? towers[to][0] > towers[from][0] : true;
  // const changeColors = (newSelection: string) => {
  //   if (!selected) {
  //     setSelected(newSelection);
  //     const c = Object.entries(towers).reduce(
  //       (a, [k, v]) => ({
  //         ...a,
  //         [k]: {
  //           disks: v.disks,
  //           color:
  //             k === newSelection || !moveCheck(newSelection, k, towers)
  //               ? "red"
  //               : "green",
  //         },
  //       }),
  //       {}
  //     );
  //     setTowers(c);
  //   } else if (!moveCheck(selected, newSelection, towers)) {
  //     return;
  //   } else {
  //     setSelected("");
  //     const onlyTowers = Object.entries(towers).reduce(
  //       (a, [k, v]) => ({
  //         ...a,
  //         [k]: v.disks,
  //       }),
  //       {}
  //     );
  //     const newTower = Object.entries(
  //       moveBlock(selected, newSelection)(onlyTowers)
  //     ).reduce(
  //       (a, [k, v]) => ({
  //         ...a,
  //         [k]: { disks: v, color: "" },
  //       }),
  //       {}
  //     );

  //     setTowers(newTower);
  //   }
  // };

  const towerColour = (index: string) => {
    // TODO: if the tower is empty blink or something
    // const c = Object.keys(towers).reduce((a, c) => {
    //   const t = towers[parseInt(c)].disks; // this tower
    //   const newBlockColour = !t.length || t[0] > towers[index].disks[0] ? "green" : "red";
    //   return { ...a, [c]: newBlockColour };
    // }, {});
    //setTowers(c);
    //filter the towers to get rid of the selected, map overthem and get a final colour needed depending on some formula that checks if its possible to mvoe the block
  };

  const moveBlockToAnotherTower = (index: number) => {
    // //
    // console.log(index);
    // console.log({ ...colours, [index]: "lightblue" });
    // const currentlySelected = Object.keys(colours).filter((v, i) =>
    //   colours[parseInt(v)].includes("lightblue")
    // );
    // const currentlySelectedIndex = parseInt(currentlySelected[0]);
    // if (colours[index].includes("green")) {
    //   //move
    //   console.log("Green");
    //   setTowers(moveBlock(currentlySelectedIndex, index)(towers));
    //   setColours({
    //     1: "",
    //     2: "",
    //     3: "",
    //   });
    // }
  };