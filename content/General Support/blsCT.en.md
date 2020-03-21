---
title: What is blsCT?
date: "2020-03-16"
draft: false
---

### Boneh-Lynn-Shacham (BLS) Signatures

BLS signatures was introduced in 2001. It enables compressions of a group of signatures into a compact signature that can be used to autheticate the entire group. This meanse that all transactions in a block can be combined to 1 transaction with 1 signature, greatly improves the bandwith, storage, verification speed, and privacy. 

### Confidential Transactions (CT)

Confidential transactions is a cryptographic protocol which results in the amount value of a transaction being encrypted. The encryption is special because it is still possible to verify that no coins can been created or destroyed within a transaction but without revealing the exact transaction amounts.

### What is blsCT

blsCT is the new privacy protocol that is currently being developed by NavCoin developers. It combines the benefits of BLS signatures and confidential transactions to provide NavCoin users adequate privacy when transacting NAV. blsCT is confidential , untraceable, and unlinkable. On top of providing sufficient privacy, blsCT trasactions are also fast to be created and scalable. 

1. blsCT transactions are aggregatable
    a. Two blsCT transactions can be merged in one blsCT transaction. 
    b. An observer can't tell if a transaction has been aggregated or not. 
    c. Transactions can be aggregated infinite times.

2. Aggregated blsCT transactions are good for privacy

blsCT hides the transaction amounts. when two transactions are aggregated and their inputs are mixed, an observer can't tell which inputs pay which outputs!

3. blsCT helps scalability

Only one signature is needed for each block, instead of needing one signature for each input.

4. liquidity providers can earn money

Nodes can earn coins offering their coins for mixing participating in the aggregation market.

                         ~~~~ AGGREGATION MARKET ~~~~
                      
                                                                           
        $                 Hello nodes! If you give me one    .───────.     
        $                 transaction to mix with mine, I   (  NODE2  )    
        $    .─────────.        will pay you 1 NAV!          `───────'     
        $   ╱           ╲                                    .───────.     
        $  (   MY NODE   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─▶ (  NODE3  )    
        $   `.         ,'                                    `───────'     
        $     `───────'      .─────.  .─────.  .─────.       .───────.     
     S  $      .───────.   ─(  TX2  )(  TX3  )(  TX4  ) ─ ─ (  NODE4  )    
     E  $     (  MY TX  ) │  `─────'  `─────'  `─────'       `───────'     
     N  $      `───┬───'                                                   
     D  $       ┌ ─       ▼                                                
     E  $            .─────────.                                           
     R  $       │   ╱           ╲                                          
        $        ─▶( AGGREGATION )                                         
        $           `.         ,'                                          
        $             `───┬───'                                            
        $                                   The aggregated transaction     
        $           .─────▼─────.  ┌ ─ ─ ─ ─ is broadcasted to other       
        $          (AGGREGATED TX)                    nodes                
        $           `───────────'  │                                       
                          │                                                
        ß                  ◀ ─ ─ ─ ┘                         .───────.     
        ß                 │                        ─ ─ ─ ─ ─(  NODE5  )    
        ß             .───▼───.                   │          `───────'     
        ß            (  NODE4  )─ ┐       ▼─ ─ ─ ─           .───────.     
     B  ß             `───────'      .─────────.       ─ ─ ─(  NODE6  )    
     R  ß                       ─ ┘ ╱           ╲     │      `───────'     
     O  ß                      └ ▶ ( AGGREGATION )◀─ ─       .───────.     
     A  ß                         ─ ▶.         ,'    ┌ ─ ─ ─(  NODE7  )    
     D  ß                        │    `───┬───'◀─ ─ ─        `───────'     
     C  ß   Aggregation happens                                            
     A  ß    again with other  ─ ┘  .─────▼─────.                          
     S  ß           txs            (AGGREGATED TX)                         
     T  ß                           `───────────'                          
        ß                                 │                                
        ß       .───────────.                         .───────────.        
        ß      (AGGREGATED TX)            │          (AGGREGATED TX)       
        ß       `───────────'             ▼           `───────────'        
                      │              .─────────.            │              
        ß                           ╱           ╲                          
        ß             └ ─ ─ ─ ─ ─ ▶( AGGREGATION )◀ ─ ─ ─ ─ ┘              
        ß                           `.         ,'                          
        ß                             `───────'                            
        ß              And again...       │                                
        ß                                 ▼                                
        ß                           .───────────.                          
        ß                          (AGGREGATED TX)                         
        ß                           `───────────'                          
        ß                                 │                                
        ß                                                                  
        ß                                 │                                
        ß                                 ▼                                
        ß                          .─────────────.                         
     S  ß                    _.───'               `────.                   
     T  ß                 ,─'                           '─.                
     A  ß               ,'                                 `.              
     K  ß             ,'                                     `.            
     E  ß           ,'                                         `.          
     R  ß          ╱                    BLOCK                    ╲         
        ß         ╱                ┌──────────────┐               ╲        
     /  ß        ╱                 │   blsCT TX   │                ╲       
        ß       ;                  ├──────────────┤                 ;       
     M  ß       ;                  │  SIGNATURE   │                  ;
     I  ß      ;                   ├───────┬──────┤                  :     
     N  ß      │                   │INPUT4 │OUTP1 │                  │     
     E  ß       inputs and   ─ ─ ─▶│INPUT2 │OUTP4 │                  │     
     R  ß       outputs are        │INPUT5 │OUTP2 │                  ;     
        ß    mixed, can't link     │INPUT3 │OUTP3 │◀──────────┐     ;      
        ß          them            │INPUT1 │ ...  │           │     ;      
        ß                          │  ...  │      │                        
        ß         ╲                └───────┴──────┘                        
        ß          ╲                                  this transaction     
        ß           ╲                                pays 1 NAV to each    
        ß            `.                               node2, node3 and     
        ß              `.                                  node4           
        ß                `.                                                
        ß                  '─.                                             
        ß                     `────.             _.───'                    
        ß                           `───────────'                          
        ß                                                                  
        ß                                                                  
        ß                                                                  
                                                                           

                         ~~~~ HOW DOES IT WORK ~~~~
                           
                                                                           
                  ┌──────────────┐       ┌──────────────┐                  
                  │     TX 1     │       │     TX 2     │                  
                  ├──────────────┤       ├──────────────┤                  
                  │  SIGNATURE   │       │  SIGNATURE   │                  
                  ├───────┬──────┤       ├───────┬──────┤                  
                  │INPUT1 │OUTP1 │       │INPUT4 │OUTP3 │                  
                  │INPUT2 │OUTP2 │       │INPUT5 │OUTP4 │                  
                  │INPUT3 │      │       │INPUT6 │      │                  
                  └───────┴──────┘       └───────┼──────┘                  
                          │                                                
                                 .─────────.     │                         
                          │     ╱           ╲                              
                           ─ ▶ ( AGGREGATION ) ◀ ┘                         
                                `.         ,'                              
                                  `───────'                                
                                      │                                    
                                      ▼                                    
                               ┌──────────────┐                            
                               │      TX      │                            
                               ├──────────────┤                            
                               │  SIGNATURE   │◀ ─ ─ only one signature    
                               ├───────┬──────┤                            
                               │INPUT4 │OUTP1 │                            
      inputs and outputs ─ ─ ─▶│INPUT2 │OUTP4 │                            
     are mixed, can't link     │INPUT5 │OUTP2 │                            
             them              │INPUT3 │OUTP3 │                            
                               │INPUT1 │      │                            
                               └───────┴──────┘  


                    ~~~~ HOW DOES A TX LOOK LIKE ~~~~

┌ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc┐
│                                                                         │
│             BLS signature - aggregation of the signatures:              │
│                                                                         │
│                                                                         │
│                             for each input:                             │
│                                                                         │
│                Sign(prev output spending key, H(input))                 │
│                                                                         │
│                                                                         │
│                            for each output:                             │
│                                                                         │
│                  Sign(output blinding key, H(output))                   │
│                                                                         │
│                                                                         │
├────────────────────────────────────┬────────────────────────────────────┤
│                                    │                                    │
│                                    │                                    │
│                                    │             BLS output             │
│                                    │                                    │
│                                    │   amount: 0xffffffff as a marker   │
│                                    │    to show it is a bls output.     │
│                                    │                                    │
│                                    │    scriptPub: spending script.     │
│                                    │       <TRUE> if no spending        │
│                                    │            conditions.             │
│                                    │                                    │
│                                    │  blinding key: public key used to  │
│                                    │   create a bls signature of the    │
│                                    │  output and as ephemeral key for   │
│             BLS input              │     creating a shared secret.      │
│                                    │                                    │
│     Same structure as a normal     │      spending key: public key      │
│   input. It can only point to a    │    authorized to spend, derived    │
│            BLS output.             │      using the shared secret.      │
│                                    │                                    │
│                                    │  encrypted data: amount, blinding  │
│                                    │  factor and memo encrypted using   │
│                                    │         the shared secret.         │
│                                    │                                    │
│                                    │    amount commitment: pedersen     │
│                                    │  commitment to the output amount   │
│                                    │       and a blinding factor.       │
│                                    │                                    │
│                                    │   range proof: proof that amount   │
│                                    │            is positive.            │
│                                    │                                    │
│                                    │                                    │
└ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc┘
