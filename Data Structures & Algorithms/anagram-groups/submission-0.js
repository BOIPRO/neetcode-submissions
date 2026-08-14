class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         const map = new Map()
    for (let i = 0; i < strs.length;i++) {
        // Tao mot array chu 26 ki tu tieng anh, 1 la co xuat hien , 0 la ko xuat hien de tao key chung cho viec group bang Map
         const count = new Array(26).fill(0)
         for (let j=0; j < strs[i].length;j++){
            // lay ma unicode cua chu cai tru di unicode cua a se ra vi tri trong count va nang len la 1
             count[strs[i][j].charCodeAt(0) - 97]++
         }
         // Bien key thanh string de so sanh
         const key = count.toString()
        if (map.has(key)) {
            // Lay phan tu trong mang trc do nap them phan tu, dung push cx dc
            map.set(key,[...map.get(key),strs[i]])
        }      
        else {
           map.set(key,[strs[i]]) 
        }
    }
    // Tra ve toan bo value trong map
     return [...map.values()];

    }
}
