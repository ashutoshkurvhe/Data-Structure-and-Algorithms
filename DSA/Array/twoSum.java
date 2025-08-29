import java.util.Scanner;

public class Sum{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        int size = sc.nextInt();
        int nums[] = new int [size];
        int target = sc.nextInt();
        return twoSum(nums,target);
    }

    public static int[] Sum(int[] nums,int target){
        System.out.print(nums, target);
    }

}