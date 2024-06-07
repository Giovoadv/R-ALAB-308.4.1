// Part 1: CREATING TABLE

const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const csv2 =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

const csvParser = (csv) => {
  let cell = "";
  let row = [];
  let table = [];

  for (let i = 0; i < csv.length; i++) {
    if (csv[i] === ",") {
      row.push(cell);
      cell = "";
    } else if (csv[i] === "\n" || i === csv.length - 1) {
      row.push(cell);
      table.push(row);

      row = [];
      cell = "";
    } else {
      cell += csv[i];
    }
  }

  return table;
};
// PART 2: TRANSFORMING DATA

const transformingData = (table) => {
  const result = [];
  const keys = table[0];

  for (let i = 1; i < table.length; i++) {
    let row = table[i];
    let obj = {};

    for (let j = 0; j < row.length; j++) {
      let cell = row[j];
      let key = keys[j];
      obj[key] = cell;
    }
    result.push(obj);
  }
  return result;
};
//PART 3: UPDATING TABLE
const manipulatingData = (data) => {
  const tableData = [...data];
  const obj = { ID: "48", Name: "Barry", Occupation: "Runner", Age: "25" };
  const objTwo = { ID: "7", Name: "Bilbo", Occupation: "None", Age: "111" };
  tableData.pop();
  tableData.unshift(obj);
  tableData.push(objTwo);

  return tableData;
};
// PART 4: CALCULATING AVERAGE
const calculateAvg = (data) => {
  let sum = 0;
  for (const props of data) {
    const number = parseInt(props.Age);
    sum += number;
  }
  const average = sum / data.length;

  return average;

  // const ages = tableData.map((prop) => {
  //   return parseInt(prop.Age);
  // });

  // console.log(ages);

  // let sum = 0;
  // for (let i = 0; i < ages.length; i++) {
  //   sum += ages[i];
  // }
  // const average = sum / ages.length;

  // return average;
};
// PART 5: RETURNING DATA BACK TO CSV FORMAT
const fullCircle = (data) => {
  let result = "";
  let keys = data[0];

  let keyProps = Object.keys(keys);
  keyProps = keyProps + "\\n";

  for (let i = 0; i < data.length; i++) {
    let row = "";
    let objData = data[i];

    for (let prop in objData) {
      let value = objData[prop];

      row += value + ",";
    }

    row = row.substring(0, row.length - 1);
    row = row + "\\n";
    result = result + row;
  }
  result = keyProps + result;
  result = result.substring(0, result.length - 2);

  return result;
};

const table = csvParser(csv);
console.log("table: ", table);
const arrObjects = transformingData(table);
console.log("objects table: ", arrObjects);
const updatedArrObjects = manipulatingData(arrObjects);
console.log("Updated table: ", updatedArrObjects);
const avg = calculateAvg(updatedArrObjects);
console.log("Average: ", avg);
const returnStr = fullCircle(updatedArrObjects);
console.log("Back into CSV: ", returnStr);
