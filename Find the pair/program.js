let nums = [8, 7, 2, 5, 3, 1]
let target = 10
let pair =[]

for(let i = 0 ; i<=nums.length;i++)
{
    for(let j = i+1;j<=nums.length;j++)
    {
        if(nums[i]+nums[j]==target)
        {
            pair.push(nums[i])
            pair.push(nums[j])
            console.log(`Pair found ${pair}`)
            return;
        }
    }
}
console.log("Pair not found")
