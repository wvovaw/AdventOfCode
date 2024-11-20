import { assertEquals } from "@std/assert";
import Stack from "./Stack.ts";

Deno.test("Stack class", async (t) => {
  await t.step("Stack constructors", async (t) => {
    await t.step("No params constructor", () => {
      const stack = new Stack();
      assertEquals(stack.length, 0);
    });
    await t.step("From array constructor", () => {
      const arr = [1, 2, 3, 4, 5];
      const stack = new Stack(arr);
      assertEquals(stack.length, 5);
    });
    await t.step("Copy constructor", () => {
      const A = new Stack<number>([1, 2, 3, 4, 5, 6]);
      const B = new Stack<number>(A);
      assertEquals(A, B);
    });
  });

  await t.step("push() and pop()", () => {
    const stack = new Stack();
    assertEquals(stack.length, 0);

    stack.push(0);
    assertEquals(stack.length, 1);

    stack.push(1);
    stack.push(2);
    assertEquals(stack.length, 3);

    assertEquals(stack.pop(), 2);
    assertEquals(stack.length, 2);

    assertEquals(stack.pop(), 1);
    assertEquals(stack.pop(), 0);
    assertEquals(stack.pop(), undefined);
    assertEquals(stack.length, 0);
  });

  await t.step("peek()", () => {
    const stack = new Stack([1, 2, 3, 4]);
    assertEquals(stack.peek(), 4);
    stack.push(7);
    assertEquals(stack.peek(), 7);
    stack.push(12);
    stack.push(13);
    assertEquals(stack.peek(), 13);
  });
});
