import SwaggerUI from 'swagger-ui-react'
import 'swagger-ui-react/swagger-ui.css'
import './swagger-custom.css' 

# Teste de Endpoints da API Maritaca 

<SwaggerUI spec={{
  "openapi": "3.0.2",
  "servers": [
    {
      "url": "https://chat.maritaca.ai/api/",
      "description": "URL para realizar as requisições na Maritalk API"
    }
  ],
  "paths": {
    "/chat/completions": {
      "post": {
        "tags": ["Inferência"],
        "summary": "Openai Compatible Chat Inference Endpoint",
        "operationId": "openai_compatible_chat_inference_endpoint_chat_completions_post",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "model": {
                    "type": "string",
                    "description": "Modelo que irá gerar a resposta",
                    "example": "sabia-3"
                  },
                  "messages": {
                    "type": "array",
                    "description": "Lista de mensagens enviadas ao modelo.",
                    "items": {
                      "type": "object",
                      "properties": {
                        "role": {
                          "type": "string",
                          "description": "Papel do autor da mensagem (e.g., system, user, assistant)",
                          "example": "user"
                        },
                        "content": {
                          "type": "string",
                          "description": "Conteúdo da mensagem.",
                          "example": "Estou planejando uma viagem para Bahia. Você poderia me recomendar um ponto turístico?"
                        }
                      }
                    }
                  }
                },
                "required": ["model", "messages"]
              },
              "example": {
                "model": "sabia-3",
                "messages": [
                  {
                    "role": "system",
                    "content": "Você é um assistente de viagens especializado em fornecer informações sobre destinos turísticos, hotéis, restaurantes e atividades locais."
                  },
                  {
                    "role": "user",
                    "content": "Estou planejando uma viagem para Bahia. Você poderia me recomendar um ponto turístico?"
                  }
                ]
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "id": { "type": "string", "example": "123abc45-67de-f89g-1011-12h131415i16" },
                    "object": { "type": "string", "example": "chat_completion" },
                    "created": { "type": "integer", "example": 1730807994 },
                    "model": { "type": "string", "example": "sabia-3" },
                    "choices": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "index": { "type": "integer", "example": 0 },
                          "message": {
                            "type": "object",
                            "properties": {
                              "role": { "type": "string", "example": "assistant" },
                              "content": {
                                "type": "string",
                                "example": "Certamente! A Bahia é um estado cheio de belezas naturais e culturais. Um dos pontos turísticos mais famosos é o Pelourinho, localizado na cidade de Salvador..."
                              },
                              "finish_reason": { "type": "string", "example": "stop" }
                            }
                          },
                          "logprobs": { "type": "string", "nullable": true, "example": null }
                        }
                      }
                    },
                    "usage": {
                      "type": "object",
                      "properties": {
                        "prompt_tokens": { "type": "integer", "example": 54 },
                        "completion_tokens": { "type": "integer", "example": 538 },
                        "total_tokens": { "type": "integer", "example": 592 }
                      }
                    },
                    "system_fingerprint": { "type": "string", "example": "c68cf2ecaa94f232" }
                  }
                }
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "detail": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "loc": {
                            "type": "array",
                            "items": { "type": "string" }
                          },
                          "msg": { "type": "string", "example": "Campo obrigatório." },
                          "type": { "type": "string", "example": "value_error.missing" }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "security": [
          {
            "Authorization": []
          }
        ]
      }
    },
    "/models": {
      "get": {
        "tags": ["Informações"],
        "summary": "Listar Modelos Disponíveis",
        "operationId": "listar_modelos_disponiveis",
        "responses": {
          "200": {
            "description": "Successful Response",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": { "type": "string", "example": "sabia-3" },
                      "object": { "type": "string", "example": "model" },
                      "created": { "type": "integer", "example": 1725840000 },
                      "owned_by": { "type": "string", "example": "maritacaai" }
                    }
                  }
                },
                "example": [
                  {
                    "id": "sabia-3",
                    "object": "model",
                    "created": 1725840000,
                    "owned_by": "maritacaai"
                  },
                  {
                    "id": "sabia-2-small",
                    "object": "model",
                    "created": 1710201600,
                    "owned_by": "maritacaai"
                  }
                ]
              }
            }
          },
          "422": {
            "description": "Validation Error",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "detail": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "loc": {
                            "type": "array",
                            "items": { "type": "string" }
                          },
                          "msg": { "type": "string", "example": "Campo obrigatório." },
                          "type": { "type": "string", "example": "value_error.missing" }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "security": [
          {
            "Authorization": []
          }
        ]
      }
    }
  },
  "components": {
    "securitySchemes": {
      "Authorization": {
        "type": "apiKey",
        "description": "Provide your Authorization header with 'Key <your_api_key>'",
        "in": "header",
        "name": "Authorization"
      }
    }
  },
  "tags": [
    {
      "name": "Inferência",
      "description": "Faça inferências com o modelo de linguagem da Maritaca AI. Não se esqueça de adicionar o Header 'Authorization' com 'Key <sua_chave_de_api>' conforme ilustrado no botão 'Authorize' acima."
    },
    {
      "name": "Informações",
      "description": "Obtenha informações sobre os modelos disponíveis. Não se esqueça de adicionar o Header 'Authorization' com 'Key <sua_chave_de_api>' conforme ilustrado no botão 'Authorize' acima."
    }
  ]
}} />
