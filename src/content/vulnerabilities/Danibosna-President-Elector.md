---
title: President Elector
author: DaniBosna
description: Find out what makes Astro awesome!
img: /assets/images/BTC.jpg
---

# President Elector - Findings Report

# Table of contents

- ## [Contest Summary](#contest-summary)

- ## [Results Summary](#results-summary)

- ## High Risk Findings

  - ### [H-01. "Vulnerability Report: Handling of Duplicate Candidates in rankCandidates Function"](#H-01)

# <a id='contest-summary'></a>Contest Summary

### Sponsor: First Flight #24

### Dates: Sep 12th, 2024 - Sep 19th, 2024

[See more contest details here](https://codehawks.cyfrin.io/c/2024-09-president-elector)

# <a id='results-summary'></a>Results Summary

### Number of findings

- High: 1
- Medium: 0
- Low: 0

# High Risk Findings

## <a id='H-01'></a>H-01. "Vulnerability Report: Handling of Duplicate Candidates in rankCandidates Function"

## Summary

The contract has a vulnerability in the rankCandidates function. The issue arises when duplicate candidates are allowed in the voting list, which can lead to inconsistencies and potential manipulation of the voting results.

## Vulnerability Details

The testDuplicateCandidates function is meant to test the contract’s handling of duplicate candidates in the voting list. In the test, the candidate list contains duplicates (orderedCandidates = \[candidates\[0], candidates\[0], candidates\[1]]). The rankCandidates function of the rankedChoice contract is called with this list.

The main problem is that the contract seems to allow duplicate candidates without any validation or filtering. This can lead to a situation where a candidate receives more votes than they should, potentially manipulating the voting results.

The test verifies that the recorded vote matches the provided list, including duplicates. The getUserCurrentVote function returns the list of ranked candidates, and the test passes if the result includes the duplicates in the expected order.

## Impact

Allowing duplicate candidates in the voting process can have several negative impacts:

Vote Manipulation: Voters could manipulate the results by including duplicates, giving a false impression of a candidate's popularity or support.

Result Inconsistencies: Duplicates can cause inconsistencies in the voting results, making the process less transparent and fair.

Violation of Voting Rules: Allowing duplicates might violate the defined voting rules, leading to disputes and legal issues.

## Tools Used

Solidity: For contract implementation and testing.:brFoundry: Tool used for running tests on smart contracts.

## Recommendations

**Validate Inputs:** Implement input validation in the rankCandidates function to ensure the candidate list does not contain duplicates.
