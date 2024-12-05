// Source code is decompiled from a .class file using FernFlower decompiler.
import java.util.Scanner;

public class TextEncoderDecoder {
   public TextEncoderDecoder() {
   }

   public static void displayMenu() {
      System.out.println("=== Text Encoder and Decoder ===");
      System.out.println("1. Encode a message");
      System.out.println("2. Decode a message");
      System.out.println("3. Exit");
      System.out.print("Choose an option: ");
   }

   public static String encodeMessage(String var0, int var1) {
      return processMessage(var0, var1);
   }

   public static String decodeMessage(String var0, int var1) {
      return processMessage(var0, -var1);
   }

   public static String processMessage(String var0, int var1) {
      StringBuilder var2 = new StringBuilder();
      char[] var3 = var0.toCharArray();
      int var4 = var3.length;

      for(int var5 = 0; var5 < var4; ++var5) {
         char var6 = var3[var5];
         if (Character.isLetter(var6)) {
            int var7 = Character.isUpperCase(var6) ? 65 : 97;
            int var8 = (var6 - var7 + var1 + 26) % 26 + var7;
            var2.append((char)var8);
         } else {
            var2.append(var6);
         }
      }

      return var2.toString();
   }

   public static void main(String[] var0) {
      Scanner var1 = new Scanner(System.in);
      boolean var2 = true;

      for(boolean var3 = false; var2; System.out.println()) {
         displayMenu();
         int var4 = var1.nextInt();
         var1.nextLine();
         int var9;
         switch (var4) {
            case 1:
               System.out.print("Enter the message to encode: ");
               String var5 = var1.nextLine();
               System.out.print("Enter the shift value: ");
               var9 = var1.nextInt();
               var1.nextLine();
               String var6 = encodeMessage(var5, var9);
               System.out.println("Encoded Message: " + var6);
               break;
            case 2:
               System.out.print("Enter the message to decode: ");
               String var7 = var1.nextLine();
               System.out.print("Enter the shift value: ");
               var9 = var1.nextInt();
               var1.nextLine();
               String var8 = decodeMessage(var7, var9);
               System.out.println("Decoded Message: " + var8);
               break;
            case 3:
               var2 = false;
               System.out.println("Exiting the program. Goodbye!");
               break;
            default:
               System.out.println("Invalid choice. Please try again.");
         }
      }

      var1.close();
   }
}
