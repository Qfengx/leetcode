/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 *
 * 示例:
 *
 * 给定 nums = [2, 7, 11, 15], target = 9
 *
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/two-sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

/**
 * 一、最简单的可以两次for循环遍历 找出两和为target的下标 但是这样时间复杂度有点高O(n²)
 * 二、可以利用Map将时间复杂度降为0(n) 遍历的时候到Map中查找是否有符合条件的
 */
public class Solution {
    public int[] towSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            // 说明map中有符合条件的元素 直接返回
            if (map.get(target - nums[i]) != null) {
                return new int[] { map.get(target - nums[i]), i };
            } else { // map中没有找到符合条件的  同时讲自身放入Map
                map.put(nums[i], i);
            }
        }
        return new int[] {};
    }

    public static void main(String[] args) {
        int[] arr = new int[] { 2, 7, 11, 15 };
        System.out.println(Arrays.toString(new Solution().towSum(arr, 9)));
    }
}
