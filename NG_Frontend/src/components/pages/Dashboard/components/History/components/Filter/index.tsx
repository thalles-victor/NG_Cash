import React, { useContext, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FunnelSimple, ArrowRight } from "phosphor-react"
import {
  HamburgerMenuIcon,
  ChevronRightIcon,
} from '@radix-ui/react-icons';
import { FIlterContainer, Root, Content, SubTrigger, SubContent, Item, Trigger } from './styles';
import { TransactionContext } from '../../../../TransactionProvider';

export function Filter() {
  const { transactions, fetchTransactions } = useContext(TransactionContext);
  const [query, setQuery] = useState<string>("")

  function handleFetTransactionsWithQuery() {
    fetchTransactions([query])
  }

  return (
    <FIlterContainer>
      <Root>
        <Trigger asChild>
            <FunnelSimple size={32}/>
        </Trigger>

        <DropdownMenu.Portal>
          <Content sideOffset={5}>
            <DropdownMenu.Sub>
              <SubTrigger>
                Data
                <div>
                  <ArrowRight />
                </div>
              </SubTrigger>
              <DropdownMenu.Portal>
                <SubContent
                  sideOffset={2}
                  alignOffset={-5}
                >
              
                  <Item
                    onClick={() =>  { setQuery("date=asc") }}
                  >Mais recente</Item>
                  <Item>Mais antigo</Item>
                  <DropdownMenu.Separator/>
                  
                </SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

            <DropdownMenu.Separator />

            <DropdownMenu.Sub>
              <SubTrigger>
                Tipo de transação
                <div className="RightSlot">
                  <ArrowRight />
                </div>
              </SubTrigger>
              <DropdownMenu.Portal>
                <SubContent
                  sideOffset={2}
                  alignOffset={-5}
                >
                  <Item>Entrada</Item>
                  <Item>Saída</Item>
                  <DropdownMenu.Separator />
                </SubContent>
              </DropdownMenu.Portal>
            </DropdownMenu.Sub>

          </Content>
        </DropdownMenu.Portal>
      </Root>
    </FIlterContainer>
  );
};