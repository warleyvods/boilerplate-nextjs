import { useMutation } from "react-query";

import { useToast } from "@chakra-ui/react";
import { AxiosError } from "axios";
import { api } from "../services/api";
import { queryClient } from "../services/queryClient";

export type createUserForm = {
  id: number;
  name: string;
  cpf: string;
  age: number;
}

type ErrorType = {
  title: string;
  details: string;
}

export function useCreateUser(onSuccess?: () => {}, onError?: () => {}) {
  const toast = useToast()

  return useMutation(async (user: createUserForm) => {
    const response = await api.post('/api/people', {
      ...user
    })

    return response.data.user;
  }, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(['user'])
      onSuccess?.()
    }, onError: (error: AxiosError<ErrorType>) => {
      onError?.()

      toast({
        title: error.response.data.title,
        description: error.response.data.details,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  });
}
