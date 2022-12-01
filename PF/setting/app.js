import * as libGrid from "../../ir-style/grid.js";

const FELID_NAME = [
    "구분", "빌더벌칭", "URL", "빌더연결테스트", "테스트결과"
]

const defaultRenderer = libGrid.renderGridCellDefault();
const buttonRenderer = libGrid.renderGridButton({
    onClick: (ev, row, col) => {
        console.log("loading...");
    },
    defaultLabel: "TEST",
    defaultIcon: "item-apply"
})

function createGrid() {
    const grid = new libGrid.IRGrid({
        contextElement: $("#ir_grid")[0],
        body: {
            rowCount: 0,
            cellRenderer: (row, col, data) => {
                if ( col === 3 )
                    return buttonRenderer(row, col, data);
                else
                    return defaultRenderer(row, col, data);
            }
        },
        defaultColumnCellFormat: {
            all: { verticalAlign: "middle" }
        },
        colHeader: {
            rowCount: 1,
            colCount: 5,
            cellRenderer: (row, col, data) => {
                data.text = FELID_NAME[col];
                return defaultRenderer(row, col, data);                
            },
            defaultSize: 80,            
        },
        rowHeader: {
            colCount: 1,
            cellRenderer: (row, col, data) => {
                data.text = "Add";
                return defaultRenderer(row, col, data);
            }
        },        
        defaultColumnCellFormat: {
            [4]: {disabled: true}
        },        
    })

    grid.setColumnWidth(2, 330);
    grid.setColumnWidth(3, 100);
    return grid;
}

let grid = createGrid();

$("#add_button").on("click", () => {
    const row = grid.addRow();
    grid.setText(row, 1, "localhost");
    grid.setText(row, 2, "https://localhost:25803/innorules/services/builder/json");        
})

$("#delete_button").on("click", () => {    
    const selection = grid.getSelection();

    if (selection) {
        grid.removeRows(selection.top, selection.bottom);
    }
})