---
title: "Introduction to Logic"
date: 2026-03-25T12:23:00+00:00
translationKey: "intro-to-logic"
draft: false
math: true
tags:
  - Mathematics
  - Introduction to Logic
---

## 1. What is a proposition?

A **proposition** is a declarative sentence that can be classified as true (T) or false (F), but never both simultaneously. In other words, it is a statement that has a well-defined truth value.

### Examples of propositions:
- "2 + 2 = 4" (true proposition)
- "The capital of Brazil is São Paulo" (false proposition)
- "The sky is blue" (true proposition)

### What is NOT a proposition:
- Questions: "What is your name?"
- Exclamations: "What a beautiful day!"
- Commands: "Close the door!"
- Open sentences: "x + 3 = 7" (depends on the value of x)

---

## 2. AND Connective (Conjunction)

The **AND connective**, also called **conjunction**, is represented by the symbol **∧** and joins two propositions. The compound proposition "p ∧ q" (read "p and q") is true **only when both propositions are true**.

### Examples:
- p: "2 is an even number"
- q: "2 is a prime number"
- p ∧ q: "2 is an even **and** prime number" (true)

---

## 3. Truth Table

The **truth table** is a tool that organizes all possible truth values for a compound proposition. It allows visualizing the result of the logical operation for each combination of values of the simple propositions.

### Truth table for AND connective (∧):

$$
\begin{array}{c c | c}
p & q & p \land q \\\\ \hline
T & T & T \\\\
T & F & F \\\\
F & T & F \\\\
F & F & F
\end{array}
$$

### Interpretation:
- When p is **T** and q is **T**: p ∧ q is **T** (both true)
- When p is **T** and q is **F**: p ∧ q is **F** (one false)
- When p is **F** and q is **T**: p ∧ q is **F** (one false)
- When p is **F** and q is **F**: p ∧ q is **F** (both false)

---

## 4. OR Connective (Disjunction)

The **OR connective**, also called **disjunction**, is represented by the symbol **∨** and joins two propositions. The compound proposition "p ∨ q" (read "p or q") is true **when at least one of the propositions is true**.

### Examples:
- p: "John is an engineer"
- q: "John is a doctor"
- p ∨ q: "John is an engineer **or** a doctor" (true if he is at least one of these professions)

### Truth table for OR connective (∨):

$$
\begin{array}{c c | c}
p & q & p \lor q \\\\ \hline
T & T & T \\\\
T & F & T \\\\
F & T & T \\\\
F & F & F
\end{array}
$$

### Interpretation:
- When p is **T** and q is **T**: p ∨ q is **T** (both true)
- When p is **T** and q is **F**: p ∨ q is **T** (one true)
- When p is **F** and q is **T**: p ∨ q is **T** (one true)
- When p is **F** and q is **F**: p ∨ q is **F** (both false)

---

## 5. Negation of Propositions

**Negation** is a logical operation that inverts the truth value of a proposition. The negation of a proposition p is represented by **¬p** or **~p** (read "not p").

### Simple rule:
- If p is **true**, then ¬p is **false**
- If p is **false**, then ¬p is **true**

### Examples:
- p: "3 is an even number" (false)
- ¬p: "3 **is not** an even number" (true)

- p: "Brazil is in South America" (true)
- ¬p: "Brazil **is not** in South America" (false)

### Truth table for negation (¬):

$$
\begin{array}{c | c}
p & \neg p \\\\ \hline
T & F \\\\
F & T
\end{array}
$$

---

## 6. Applications in Programming: Flow Control

Propositional logic is fundamental in programming, especially in **flow control**. Logical connectives determine which code blocks will be executed based on conditions.

### AND Operator

The **AND** operator is used when you need **all conditions to be true** to execute a code block.

```julia
age = 25
has_license = true

if age >= 18 && has_license
    println("Can drive")
else
    println("Cannot drive")
end
```

In this example, the message "Can drive" will be displayed **only if both conditions are true**.

### OR Operator

The **OR** operator is used when **at least one condition needs to be true** to execute a code block.

```julia
weekend = true
holiday = false

if weekend || holiday
    println("No need to work")
else
    println("Need to work")
end
```

In this example, the message will be displayed if it's a weekend **or** a holiday (or both).

### NOT Operator

The **NOT** operator inverts the logical value of a condition.

```julia
raining = false

if !raining
    println("Can go outside")
else
    println("Better stay home")
end
```

### Complex combinations

It's possible to combine multiple logical operators:

```julia
age = 20
income = 3000
has_job = true

if (age >= 18 && income >= 2000) || has_job
    println("Can apply for a loan")
else
    println("Cannot apply for a loan")
end
```

---

## 7. "If Then" and "If and Only If" Conditions

### If Then (Implication)

**Logical implication**, represented by **p → q** (read "if p, then q"), is an operation that relates two propositions. Proposition p is called the **antecedent** and q the **consequent**.

The implication p → q is **false only when p is true and q is false**. In all other cases, it is true.

### Truth table for implication (→):

$$
\begin{array}{c c | c}
p & q & p \rightarrow q \\\\ \hline
T & T & T \\\\
T & F & F \\\\
F & T & T \\\\
F & F & T
\end{array}
$$

### Examples:
- p: "It's raining"
- q: "The ground is wet"
- p → q: "**If** it's raining, **then** the ground is wet"

### Interpretation:
- If it rains and the ground gets wet: **true**
- If it rains and the ground doesn't get wet: **false**
- If it doesn't rain and the ground is wet: **true** (there may be another cause)
- If it doesn't rain and the ground isn't wet: **true**

### Application in programming:

```julia
if balance >= withdrawal_amount
    println("Withdrawal completed")
else
    println("Insufficient balance")
end
```

---

### If and Only If (Biconditional)

The **biconditional**, represented by **p ↔ q** (read "p if and only if q"), is an operation that establishes an **equivalence between two propositions**. The biconditional is true **when both propositions have the same truth value** (both true or both false).

### Truth table for biconditional (↔):

$$
\begin{array}{c c | c}
p & q & p \leftrightarrow q \\\\ \hline
T & T & T \\\\
T & F & F \\\\
F & T & F \\\\
F & F & T
\end{array}
$$

### Examples:
- p: "A number is even"
- q: "A number is divisible by 2"
- p ↔ q: "A number is even **if and only if** it is divisible by 2" (always true)

### Interpretation:
- If p is T and q is T: **true** (both are equivalent)
- If p is T and q is F: **false** (not equivalent)
- If p is F and q is T: **false** (not equivalent)
- If p is F and q is F: **true** (both are equivalent)

### Difference between "If Then" and "If and Only If":

| Operation | Symbol | Meaning | Example |
|----------|---------|---------|---------|
| **If Then** | → | One condition implies another | "If it rains, then the ground gets wet" |
| **If and Only If** | ↔ | Two conditions are equivalent | "A number is even if and only if it is divisible by 2" |

### Application in programming:

```julia
# If and only if: equivalent conditions
function can_vote(age)
    return (age >= 18) == (age < 150)
end

# If then: simple implication
function apply_discount(vip_customer, price)
    if vip_customer  # if
        return price * 0.9  # then
    end
    return price
end
```

---

## Summary of Logical Connectives

| Connective | Symbol | Name | True when | Example |
|-----------|---------|------|-----------|---------|
| **AND** | ∧ | Conjunction | Both propositions are true | p ∧ q |
| **OR** | ∨ | Disjunction | At least one proposition is true | p ∨ q |
| **NOT** | ¬ or ~ | Negation | The original proposition is false | ¬p |
| **If Then** | → | Implication | p is false or q is true | p → q |
| **If and Only If** | ↔ | Biconditional | p and q have the same truth value | p ↔ q |
