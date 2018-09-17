/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var sum=0;
for(var i=0; i<preferences.length;i++){
    var x=preferences[i];
    var y=preferences[x-1];
    if(preferences[y-1]===(i+1) && x!=y){
        sum++;
        delete preferences[i];
    }
    }
    return sum;
};
